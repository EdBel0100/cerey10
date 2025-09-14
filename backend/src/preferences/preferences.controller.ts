import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PreferencesService } from './preferences.service';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Put(':userCognitoId')
  async updatePreferences(
    @Param('userCognitoId') userCognitoId: string,
    @Body() body: any,
  ) {
    return this.preferencesService.updatePreferences(body, userCognitoId);
  }

  @Get(':userCognitoId')
  async getPreferences(
    @Param('userCognitoId') userCognitoId: string,
  ) {
    return this.preferencesService.getPreferences(userCognitoId);
  }
}
