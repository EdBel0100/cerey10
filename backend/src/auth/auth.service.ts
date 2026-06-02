// auth.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
  CognitoRefreshToken
} from 'amazon-cognito-identity-js';
import { SignInResponseDto } from 'src/Dtos/Auth-Dtos/signin-response-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const userPoolId = this.configService.get<string>('AWS_COGNITO_USER_POOL_ID');
    const clientId = this.configService.get<string>('AWS_COGNITO_CLIENT_ID');

    if (!userPoolId || !clientId) {
      throw new Error('Missing AWS Cognito configuration values');
    }

    this.userPool = new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    });
  }



  async signIn(email: string, password: string): Promise<SignInResponseDto> {
    const userRecord = await this.prisma.user.findFirst({ where: { email } });

    if (!userRecord?.cognitoId) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const username = userRecord.cognitoId;

    const user = new CognitoUser({
      //username is cognito sub
      Username: username,
      Pool: this.userPool,
    });


    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    // Wrap the callback API into a promise internally
    const session: CognitoUserSession = await new Promise((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: (result) => resolve(result),
        onFailure: (err) => reject(err),
        newPasswordRequired: () =>
          reject(
            new HttpException(
              'New password required. Please reset your password.',
              HttpStatus.PRECONDITION_REQUIRED,
            ),
          ),
      });
    });
    Logger.log(session)

    return {
      success: true,
      message: 'Signed in successfully',
      tokens: {
        accessToken: session.getAccessToken().getJwtToken(),
        idToken: session.getIdToken().getJwtToken(),
        refreshToken: session.getRefreshToken().getToken(),
      },
      user: {
        username,
        email,
      },
    };
  }



  
  // async refresh(
  //   username: string,
  //   refreshToken: string,
  // ): Promise<SignInResponseDto> {
  //   Logger.log(`Refreshing tokens for ${username}`);

  //   const user = new CognitoUser({
  //     Username: username,
  //     Pool: this.userPool,
  //   });

  //   const refreshTokenObj = new CognitoRefreshToken({ RefreshToken: refreshToken });

  //   const session: any = await new Promise((resolve, reject) => {
  //     user.refreshSession(refreshTokenObj, (err, session) => {
  //       if (err) {
  //         reject(
  //           new HttpException('Refresh token invalid', HttpStatus.UNAUTHORIZED),
  //         );
  //       } else {
  //         resolve(session);
  //       }
  //     });
  //   });

  //   return {
  //     success: true,
  //     message: 'Token refreshed successfully',
  //     tokens: {
  //       accessToken: session.getAccessToken().getJwtToken(),
  //       idToken: session.getIdToken().getJwtToken(),
  //       refreshToken, // reuse the same refresh token
  //     },
  //     user: {
  //       username,
  //       email: (session.getIdToken().decodePayload() as any).email,
  //     },
  //   };
  // }
}
