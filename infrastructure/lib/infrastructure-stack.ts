import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket for generated images
    const imageBucket = new s3.Bucket(this, 'ImageBucket', {
      bucketName: `${this.stackName.toLowerCase()}-images-${this.account}`, // ensures uniqueness
      versioned: false,  // no versioning (can turn on if needed)
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // security best practice
      encryption: s3.BucketEncryption.S3_MANAGED, // encrypt at rest
      removalPolicy: cdk.RemovalPolicy.DESTROY, // auto delete on stack destroy (dev only, use RETAIN in prod)
      autoDeleteObjects: true, // clean up objects on stack delete (dev only)
    });

    // Output the bucket name so you can use it in your app
    new cdk.CfnOutput(this, 'ImageBucketName', {
      value: imageBucket.bucketName,
    });
  }
}
