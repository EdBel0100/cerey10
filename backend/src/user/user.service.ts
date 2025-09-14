import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/Dtos/User-Dtos/create-user.dto';


@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}

  //this should create the user, initialize the preferences, initialize location, and send their credentials to cognito
  initializeUser(body:CreateUserDto){
    return this.prisma.user.create({data:body})

  }
  
  //this should be used only to change the user info, email, password ect
  async modifyUser(body: any, userCognitoId: string) {
    return this.prisma.user.update({
      where: { cognitoId:userCognitoId },
      data: body,
    });
  }
  

  //used to delete user, should cascade and delete preferences and location
  //this should get the cognito id from the token and delete it from cognito
  async deleteUser(userCognitoId: string) {
    return this.prisma.user.delete({
      where: { cognitoId:userCognitoId },
    });
  }

}
