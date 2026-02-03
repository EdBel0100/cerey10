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

    // Create an S3 bucket for generated images
    const imageBucket = new s3.Bucket(this, 'ImageBucket', {
      bucketName: `cerey-image-bucket`,
    });


    //The vpc is my isolated network 
    const vpc = new ec2.Vpc(this, 'TheVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    })

    //subnet definition -> this ensures security and database isolation making sure only stuff i want is exposed
    const subnetConfig = new ec2.Vpc(this, 'VPC', {
      subnetConfiguration: [
        //AMPLIFY OR CODEPIPELINE
         {
           cidrMask: 16,
           name: 'ingress',
           subnetType: ec2.SubnetType.PUBLIC,
         },
         //ECS
         {
           cidrMask: 16,
           name: 'application',
           subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
         },
         //RDS
         {
           cidrMask: 16,
           name: 'rds',
           subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
         }
      ]
    });

    //Define the cluster (like in kubernetes)
    const cluster = new ecs.Cluster(this, 'Cluster', { vpc });

      cluster.addCapacity('DefaultAutoScalingGroupCapacity', {
        instanceType: new ec2.InstanceType("t2.xlarge"),
        desiredCapacity: 3,
      });
    

    const imageAsset = new DockerImageAsset(this, 'MyDockerImage', {
        directory: path.join(__dirname, ''), // Path to your Dockerfile directory
      });


    //Define the task running on in the cluster
    const taskDefinition = new ecs.Ec2TaskDefinition(this, 'TaskDef');
      
      taskDefinition.addContainer('DefaultContainer', {
        image: ecs.ContainerImage.fromEcrRepository(imageAsset.repository, imageAsset.imageTag),
        memoryLimitMiB: 512,
      });
    
      //initializing the cluster with the nestjs backend on it
    const ecsService = new ecs.Ec2Service(this, 'Service', {
      cluster,
      taskDefinition,
      minHealthyPercent: 100,
      });

    


  }
}
