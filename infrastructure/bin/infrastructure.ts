#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';
import { AuthStack } from '../lib/auth-stack';
import { IngestionStack } from "../lib/ingestion-stack"

const app = new cdk.App();

new AuthStack(app, "AuthStack", {
  env: {region: "us-east-1"}
})

new IngestionStack(app, "IngestionStack", {
  env: { region: "us-east-1"}
})