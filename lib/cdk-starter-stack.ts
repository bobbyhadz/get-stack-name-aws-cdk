import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log('stackName 👉', cdk.Stack.of(this).stackName);
  }
}
