// import { Construct } from 'constructs'
// import { Stream } from 'aws-cdk-lib/aws-kinesis'
// import { FilterPattern, SubscriptionFilter } from 'aws-cdk-lib/aws-logs'
// import { KinesisDestination } from 'aws-cdk-lib/aws-logs-destinations'
// import { Stack } from '@serverless-stack/resources'
// import * as env from 'env-var'
//
// export class LogStream extends Construct {
//   constructor(scope: Stack, id: string) {
//     super(scope, id)
//     const CENTRALIZED_LOG_KINESIS_STREAM_ARN = env.get('CENTRALIZED_LOG_KINESIS_STREAM_ARN').required().asString()
//     const logStream = Stream.fromStreamArn(scope, 'centralizedLogStream', CENTRALIZED_LOG_KINESIS_STREAM_ARN)
//
//     const allFunctions = scope.getAllFunctions()
//     for (const func of allFunctions) {
//       new SubscriptionFilter(scope, `${func.node.id}-centralized-logs`, {
//         logGroup: func.logGroup,
//         destination: new KinesisDestination(logStream),
//         filterPattern: FilterPattern.stringValue('$.timestamp', '=', '*Z'),
//       })
//     }
//   }
// }
