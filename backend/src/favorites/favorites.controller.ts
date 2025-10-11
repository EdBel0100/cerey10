import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/auth-curent-user.decorator';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @UseGuards(AuthGuard)
  @Get()
  getFavoriteRecipes(
    @CurrentUser() user: {cognitoId: string},
  ){
    this.favoritesService.getFavoriteRecipes(user.cognitoId)
  }

  @UseGuards(AuthGuard)
  @Post()
  createFavoriteRecipe(
    @CurrentUser() user: {cognitoId: string},
  ){
    this.favoritesService.createFavoriteRecipe(user.cognitoId)
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteFavoriteRecipe(
    @Query("id") id: number,
  ){
    this.favoritesService.deleteFavoriteRecipe(id)
  }



}
