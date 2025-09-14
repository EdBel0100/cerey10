import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { PostOpenAiDto } from '../Dtos/OpenAi-Dtos/post-openai.dto';
import { Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
      throw new Error("Preferences not found");
    }
  
    // Properly stringify preferences
    const stringifiedPreferences = JSON.stringify(preferences, null, 2);
    Logger.log("Fetched preferences:", stringifiedPreferences);
  
    const prompt = `  
      Generate a random meal based on these preferences
      ${stringifiedPreferences}
  
  `;
  
    Logger.log("Prompt:", prompt);
  
    try {
      const textResponse = await this.openai.responses.create({
        model: "gpt-5",
        input: prompt,
        reasoning: { effort: "low" },
        text: { verbosity: "low" },
      });
  
      // Use proper field instead of .toString()
      const generatedText = textResponse.output_text;
  
      const postTextGenPrompt = `Create a professional food photo of this meal: ${generatedText}`;
  
      const imageResponse = await this.openai.images.generate({
        model: "dall-e-3",
        prompt: postTextGenPrompt,
        size: "1024x1024",
        quality: "standard",
      });
  
      if (!imageResponse.data) {
        throw new Error("Image generation failed");
      }
  
      const imageUrl = imageResponse.data[0]?.url ?? null;
  
      Logger.log("Generated text:", generatedText);
  
      return { image: imageUrl, text: generatedText };
    } catch (error) {
      console.error("Error generating image and text:", error);
      throw new Error("Failed to generate image and text");
    }
  }
  
}
