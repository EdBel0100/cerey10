#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';
import { AuthStack } from '../lib/auth-stack';

const app = new cdk.App();
// new InfrastructureStack(app, 'InfrastructureStack', {
//   env: {region: 'us-east-1' },
// });

new AuthStack(app, "AuthStack", {
  env: {region: "us-east-1"}
})