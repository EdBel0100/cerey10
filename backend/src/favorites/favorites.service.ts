import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma:PrismaService){}

  createFavoriteRecipe(data:any){

    this.prisma.favoriteRecipes.create({data})
  }

  deleteFavoriteRecipe(id:number){
    this.prisma.favoriteRecipes.delete({where:{id}})
  }
  
  getFavoriteRecipes(userCognitoId:string){
    return this.prisma.favoriteRecipes.findMany({where:{userCognitoId}})

  }

}
