import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import OpenAI from 'openai';
import { PostOpenAiDto } from '../Dtos/OpenAi-Dtos/post-openai.dto';
import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

const RECIPE_SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    ingredients: { type: 'array', items: { type: 'string' } },
    steps: { type: 'array', items: { type: 'string' } },
  },
  required: ['title', 'description', 'ingredients', 'steps'],
  additionalProperties: false,
};

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor(private readonly prisma:PrismaService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateImageAndText(userCognitoId: string) {
    const preferences = await this.prisma.preferences.findFirst({
      where: { userCognitoId },
    });

    if (!preferences) {
      throw new HttpException(
        "Set your dietary preferences before generating a recipe",
        HttpStatus.BAD_REQUEST,
      );
    }

    const stringifiedPreferences = JSON.stringify(preferences, null, 2);
    Logger.log("Fetched preferences:", stringifiedPreferences);

    const prompt = `
      Generate a random meal based on these preferences
      ${stringifiedPreferences}

      Return the recipe title, a one-sentence description, a list of
      ingredients (one per array item, including quantities), and a list
      of numbered directions (one step per array item, no leading numbers
      in the text itself).

      Then generate a professional food photo of the meal you just created.
  `;

    Logger.log("Prompt:", prompt);

    try {
      const response = await this.openai.responses.create({
        model: "gpt-5",
        input: prompt,
        reasoning: { effort: "low" },
        text: {
          verbosity: "low",
          format: {
            type: "json_schema",
            name: "recipe",
            strict: true,
            schema: RECIPE_SCHEMA,
          },
        },
        tools: [{ type: "image_generation" }],
      });

      const recipe = JSON.parse(response.output_text);

      const imageCall = response.output.find(
        (output) => output.type === "image_generation_call",
      );

      if (!imageCall?.result) {
        throw new Error("Image generation failed");
      }

      const image = `data:image/png;base64,${imageCall.result}`;

      Logger.log("Generated recipe:", recipe.title);

      return {
        image,
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
      };
    } catch (error) {
      console.error("Error generating image and text:", error);
      throw new HttpException(
        "Failed to generate image and text",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
