import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PreferencesService {
  constructor(private readonly prisma:PrismaService){}

  updatePreferences(body: any, userCognitoId: string) {
    return this.prisma.preferences.update({
      where: { userCognitoId },
      data: body,  
    });
  }
  
  getPreferences(userCognitoId: string){
    return this.prisma.preferences.findUnique({where:{userCognitoId}})
  }
}
