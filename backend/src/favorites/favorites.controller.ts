import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/auth-curent-user.decorator';
import { Logger } from '@nestjs/common';

@Controller('/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @UseGuards(AuthGuard)
  @Get()
  getFavoriteRecipes(
    @CurrentUser() user: { cognitoId: string},
  ){
    return this.favoritesService.getFavoriteRecipes("04e8c4b8-b0f1-701a-297a-b221c446abb9")
  }

  @UseGuards(AuthGuard)
  @Post()
  createFavoriteRecipe(
   @Body() createFavoriteRecipeDto: any
  ){
    this.favoritesService.createFavoriteRecipe(createFavoriteRecipeDto)
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteFavoriteRecipe(
    @Query("id") id: number,
  ){
    this.favoritesService.deleteFavoriteRecipe(id)
  }



}
