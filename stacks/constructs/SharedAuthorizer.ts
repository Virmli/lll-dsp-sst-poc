// import { aws_apigateway as apigateway, aws_lambda as lambda, Duration } from 'aws-cdk-lib'
// import { Construct } from 'constructs'
//
// export interface SharedAuthorizerProps {
//   authorizerArn: string
// }
//
// export class SharedAuthorizer extends apigateway.RequestAuthorizer {
//   constructor(scope: Construct, id: string, props: SharedAuthorizerProps) {
//     super(scope, id, {
//       handler: lambda.Function.fromFunctionArn(scope, 'existing-authorizer', props.authorizerArn),
//       identitySources: [apigateway.IdentitySource.header('Authorization')],
//       resultsCacheTtl: Duration.seconds(0),
//       // TODO: create shared role to assume to minimize shared authorizer policy size
//       // assumeRole: ,
//     })
//   }
//
//   getMethodOptions(): apigateway.MethodOptions {
//     return {
//       authorizationType: apigateway.AuthorizationType.CUSTOM,
//       authorizer: this,
//     }
//   }
// }
