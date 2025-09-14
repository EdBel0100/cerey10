import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as amplify from "@aws-cdk/aws-amplify-alpha"
import { SecretValue } from 'aws-cdk-lib';

export class AuthStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, "CereyUserPool", {
      userPoolName: "Cerey-UserPool",
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
        phone: true,
      },
      autoVerify: {
        email: true,
        phone: true, 
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: false,
        },
        phoneNumber: {
          required: false,
          mutable: true,
        },
      },
      customAttributes: {
        role: new cognito.StringAttribute({ mutable: true }),
        signupSource: new cognito.StringAttribute({ mutable: false }),
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: false,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_AND_PHONE_WITHOUT_MFA,
    });

    const userPoolClient = new cognito.UserPoolClient(this, "UserPoolClient", {
      userPool,
      generateSecret: false,
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
    });


    const amplifyApp = new amplify.App(this, 'CereyFrontend', {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'EdBel0100',
        repository: 'cerey10', // repo name only
        oauthToken: SecretValue.unsafePlainText('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'), // name of secret in Secrets Manager
      }), // point to the Expo app folder
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        applications:{
        appRoot: 'frontend',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'cd frontend',
                'pnpm install',
              ],
            },
            build: {
              commands: [
                'cd frontend',
                'expo build:web', // or your Expo web build command
              ],
            },
          },
          artifacts: {
            baseDirectory: 'frontend/web-build', // adjust to where Expo outputs web build
            files: ['**/*'],
          },
        },
      }
      }),
    });    
  }
}
