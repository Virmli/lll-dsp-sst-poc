import { App } from '@serverless-stack/resources'
import { aws_lambda as lambda } from 'aws-cdk-lib'
import * as path from 'path'
import DSPStack from './DSPStack'

// const { Tracing } = lambda

export default function main(app: App): void {
  const STAGE = app.stage
  const SERVICE_NAME = app.name

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'python3.9',
    tracing: 'active',//Tracing.ACTIVE,
    srcPath: "src",
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
      ENVIRONMENT: ['dev', 'prod'].includes(app.stage) ? app.stage : 'dev',
      REGION: app.region
    },
  })

  new DSPStack(app, 'stack')
}
