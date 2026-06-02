import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cognito from "aws-cdk-lib/aws-cognito";

export class AuthStack extends cdk.Stack {
  public readonly userPool: cognito.UserPool;
  public readonly userPoolClient: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.userPool = new cognito.UserPool(this, "CereyUserPool", {
      userPoolName: "Cerey-UserPool",
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
        username: false,  
        phone: false,     
      },
      autoVerify: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: false,
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
      mfa: cognito.Mfa.OFF,  // explicitly disable MFA
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,  // email recovery only, no phone
    });

    this.userPoolClient = new cognito.UserPoolClient(this, "UserPoolClient", {
      userPool: this.userPool,
      generateSecret: false,
      authFlows: {
        userPassword: true,
        userSrp: true,
        adminUserPassword: false,  // disable admin flow unless needed
        custom: false,
      },
      preventUserExistenceErrors: true,  // security: don't leak whether email exists
    });

    // Outputs so you can grab these values easily after deploy
    new cdk.CfnOutput(this, "UserPoolId", {
      value: this.userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "UserPoolClientId", {
      value: this.userPoolClient.userPoolClientId,
    });
  }
}