import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { PostOpenAiDto } from '../Dtos/OpenAi-Dtos/post-openai.dto';


@Controller('/openai')
export class OpenAiController {
  constructor(private readonly OpenAiService: OpenAiService) {}

  @Post()
  create() {
    return this.OpenAiService.generateImageAndText("user-12345");
  }

}
