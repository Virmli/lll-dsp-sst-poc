import { App } from '@serverless-stack/resources'
import { aws_lambda as lambda } from 'aws-cdk-lib'
import * as env from 'env-var'
import * as path from 'path'
import DSPStack from './DSPStack'

const { Tracing } = lambda

export default function main(app: App): void {
  const STAGE = app.stage
  const SERVICE_NAME = app.name

  const ENVIRONMENT = env.get('ENVIRONMENT').required().asString()
  const REGION = env.get('REGION').required().asString()

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'python3.9',
    tracing: 'active',//Tracing.ACTIVE,
    functionName: ({ functionProps }): string => {
      if (!functionProps.handler) {
        throw new Error('SST Function handler path is undefined')
      }

      // name functions based on file name - ex. src/get-report.ts -> stage-service-get-report
      return `${app.stage}-${app.name}-${path.parse(functionProps.handler).name}`
    },
    environment: {
      SERVICE_NAME,
      STAGE,
      ENVIRONMENT,
      REGION,
    },
  })

  new DSPStack(app, 'stack')
}
