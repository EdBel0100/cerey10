import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/Dtos/User-Dtos/create-user.dto';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { CognitoIdentityProviderClient, AdminDeleteUserCommand } from '@aws-sdk/client-cognito-identity-provider';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  private readonly cognitoClient: CognitoIdentityProviderClient;

  constructor(
    private configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.cognitoClient = new CognitoIdentityProviderClient({
      region: this.configService.get('AWS_REGION'),
    });
  }

  

async create(dto: CreateUserDto) {
  return this.prisma.user.create({
    data: {
      cognitoId: dto.cognitoId,
      email: dto.email,
      preferences: {
        create: {
          vegetarianOnly:   false,
          vegan:            false,
          pescatarian:      false,
          flexitarian:      false,
          meatOnly:         false,

          glutenFree:       false,
          lactoseFree:      false,
          dairyFree:        false,
          nutFree:          false,
          peanutFree:       false,
          shellfishFree:    false,
          eggFree:          false,
          soyFree:          false,
          fishFree:         false,
          nightshadeFree:   false,

          lowCarb:          false,
          keto:             false,
          paleo:            false,
          lowSugar:         false,
          lowSalt:          false,
          lowFat:           false,
          highProtein:      false,
          rawFood:          false,
          whole30:          false,
          diabeticFriendly: false,

          customPreferences: '',
        },
      },
    },
    include: {
      preferences: true,
    },
  });
}
  
  async modifyUser(body: any, userCognitoId: string) {
    return this.prisma.user.update({
      where: { cognitoId:userCognitoId },
      data: body,
    });
  }
  

  async delete(userCognitoId: string) {

    await this.cognitoClient.send(new AdminDeleteUserCommand({
      UserPoolId: this.configService.get('AWS_COGNITO_USER_POOL_ID'),
      Username: userCognitoId,
    }));

    return this.prisma.user.delete({
      where: { cognitoId:userCognitoId}
    });
  }

}
