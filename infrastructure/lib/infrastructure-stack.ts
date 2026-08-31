import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ec2 from "aws-cdk-lib/aws-ec2"
import * as ecs from "aws-cdk-lib/aws-ecs"
import * as path from "path"
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const imageBucket = new s3.Bucket(this, 'ImageBucket', {
      bucketName: `cerey-image-bucket`,
    });

    const vpc = new ec2.Vpc(this, 'TheVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    })

    const subnetConfig = new ec2.Vpc(this, 'VPC', {
      subnetConfiguration: [
         {
           cidrMask: 16,
           name: 'ingress',
           subnetType: ec2.SubnetType.PUBLIC,
         },
         {
           cidrMask: 16,
           name: 'application',
           subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
         },
         {
           cidrMask: 16,
           name: 'rds',
           subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
         }
      ]
    });

    const cluster = new ecs.Cluster(this, 'Cluster', { vpc });

      cluster.addCapacity('DefaultAutoScalingGroupCapacity', {
        instanceType: new ec2.InstanceType("t2.xlarge"),
        desiredCapacity: 3,
      });


    const imageAsset = new DockerImageAsset(this, 'MyDockerImage', {
        directory: path.join(__dirname, ''),
      });

    const taskDefinition = new ecs.Ec2TaskDefinition(this, 'TaskDef');

      taskDefinition.addContainer('DefaultContainer', {
        image: ecs.ContainerImage.fromEcrRepository(imageAsset.repository, imageAsset.imageTag),
        memoryLimitMiB: 512,
      });

    const ecsService = new ecs.Ec2Service(this, 'Service', {
      cluster,
      taskDefinition,
      minHealthyPercent: 100,
      });



  }
}
