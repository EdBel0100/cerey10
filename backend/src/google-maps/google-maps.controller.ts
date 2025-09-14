import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoogleMapsService } from './google-maps.service';


@Controller('google-maps')
export class GoogleMapsController {
  constructor(private readonly googleMapsService: GoogleMapsService) {}

  @Post('/search')
  async searchPlaces(@Body() body: any) {
    return this.googleMapsService.searchPlaces(body);
  }

}
