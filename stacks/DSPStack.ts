import { App, Stack, StackProps, ApiGatewayV1Api, Function } from '@serverless-stack/resources'

// import { customDomainForStage } from './utils'
// import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam'
// import * as env from 'env-var'
// import { LogStream } from './constructs/LogStream'
// import DSPDashboard from './DSPDashboard'
// const AUTHORIZER_LAMBDA_ARN = env.get('AUTHORIZER_LAMBDA_ARN').required().asString()
// const SECRETS_ARN = env.get('SECRETS_ARN').required().asString()

export default class DSPStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // const authorizer = new SharedAuthorizer(this, 'authorizer', {
    //   authorizerArn: AUTHORIZER_LAMBDA_ARN,
    // })

    const getStores = new Function(this, 'getStores', {
      handler: 'handlers/api/getStores.main',
    })

    const api = new ApiGatewayV1Api(this, 'api', {
      // customDomain: customDomainForStage(scope.stage),
      routes: {
        'GET /stores': {
          function: getStores,
        },
      },
    })

    // new LogStream(this, 'log-stream')
    // new DSPDashboard(this, api, {
    //   name: 'dsp-alert',
    //   arn: DSP_ALERTS_ARN,
    // })

    this.addOutputs({
      ServiceURL: api.url,
    })
  }
}
