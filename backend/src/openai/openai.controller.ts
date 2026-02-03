import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { PostOpenAiDto } from '../Dtos/OpenAi-Dtos/post-openai.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CurrentUser } from 'src/auth/auth-curent-user.decorator';


//added a later so it is not reached for now
@Controller('/openaio')
export class OpenAiController {
  constructor(private readonly OpenAiService: OpenAiService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @CurrentUser() user: {cognitoId: string}
  ) {
    return this.OpenAiService.generateImageAndText(user.cognitoId);
  }

}
