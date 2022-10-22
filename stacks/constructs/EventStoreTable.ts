// import * as sst from '@serverless-stack/resources'
// import { StreamViewType, BillingMode, TableEncryption } from 'aws-cdk-lib/aws-dynamodb'
// import { Construct } from 'constructs'
// import { RemovalPolicy, aws_sns as sns, aws_sqs as sqs } from 'aws-cdk-lib'
// import { SqsEventSourceProps } from 'aws-cdk-lib/aws-lambda-event-sources'
// import { SqsSubscriptionProps } from 'aws-cdk-lib/aws-sns-subscriptions'
//
// export type EventStoreHandlerProps = {
//   functionProps: sst.FunctionProps
//   eventTypes: string[]
//   queueConsumerProps?: SqsEventSourceProps
//   sqsQueueProps?: sqs.QueueProps
//   snsSubscriptionProps?: SqsSubscriptionProps
// }
//
// export type EventStoreHandler = {
//   function: sst.Function
//   queue: sst.Queue
// }
//
// export class EventStoreTable extends Construct {
//   public readonly topic: sst.Topic
//   public readonly table: sst.Table
//   public readonly function: sst.Function
//
//   constructor(scope: sst.Stack, id: string) {
//     super(scope, id)
//
//     const isProd = scope.stage === 'prod'
//
//     this.topic = new sst.Topic(this, 'event-store-topic') // we can make this coming from props in future.
//
//     this.function = new sst.Function(this, 'event-store-dispatcher', {
//       handler: 'src/handlers/event-dispatch-handler/event-dispatcher.handler',
//       environment: {
//         EVENT_DISPATCHER_TOPIC: this.topic.topicArn,
//       },
//     })
//
//     this.topic.snsTopic.grantPublish(this.function)
//
//     this.table = new sst.Table(this, 'event-store', {
//       fields: {
//         aggregateId: sst.TableFieldType.STRING,
//         revision: sst.TableFieldType.NUMBER,
//       },
//       primaryIndex: { partitionKey: 'aggregateId', sortKey: 'revision' },
//       stream: StreamViewType.NEW_IMAGE,
//       dynamodbTable: {
//         billingMode: BillingMode.PAY_PER_REQUEST,
//         encryption: TableEncryption.DEFAULT,
//         removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
//         pointInTimeRecovery: isProd,
//       },
//     })
//
//     this.table.addConsumers(this, {
//       eventDispatchHandler: this.function,
//     })
//   }
//
//   subscribeEventHandler(scope: sst.Stack, id: string, props: EventStoreHandlerProps): EventStoreHandler {
//     const { functionProps, eventTypes, sqsQueueProps, queueConsumerProps, snsSubscriptionProps } = props
//
//     const eventHandler = new sst.Function(scope, id, functionProps)
//     const queue = new sst.Queue(scope, `${id}-queue`, {
//       sqsQueue: {
//         queueName: `${scope.stage}-${id}`,
//         ...sqsQueueProps,
//       },
//       consumer: {
//         function: eventHandler,
//         consumerProps: queueConsumerProps,
//       },
//     })
//
//     this.topic.addSubscribers(this, [
//       {
//         queue,
//         subscriberProps: {
//           rawMessageDelivery: true,
//           filterPolicy: {
//             type: sns.SubscriptionFilter.stringFilter({
//               allowlist: eventTypes,
//             }),
//           },
//           ...snsSubscriptionProps,
//         },
//       },
//     ])
//
//     return {
//       function: eventHandler,
//       queue,
//     }
//   }
// }
