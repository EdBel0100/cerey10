import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CurrentUser } from 'src/auth/auth-curent-user.decorator';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @UseGuards(AuthGuard)
  @Put()
  async updatePreferences(
    @CurrentUser() user: { cognitoId: string},
    @Body() body: any,
  ) {
    return this.preferencesService.updatePreferences(body, user.cognitoId);
  }
  @UseGuards(AuthGuard)
  @Get()
  async getPreferences(
    @CurrentUser() user: { cognitoId: string},
  ) {
    return this.preferencesService.getPreferences(user.cognitoId);
  }
}
