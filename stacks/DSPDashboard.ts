// import { Stack, ApiGatewayV1Api } from '@serverless-stack/resources'
// import { Watchful } from 'cdk-watchful'
// import { aws_sns as sns, aws_cloudwatch as cloudwatch } from 'aws-cdk-lib'
// import { IMetric } from 'aws-cdk-lib/aws-cloudwatch'
//
// type alertSns = {
//   name: string
//   arn: string
// }
// class DSPDashboard {
//   constructor(scope: Stack, api: ApiGatewayV1Api, alertSns: alertSns) {
//     const alarmSns = sns.Topic.fromTopicArn(scope, alertSns.name, alertSns.arn)
//     const watchful = new Watchful(scope, 'watchful', {
//       dashboardName: scope.stackName,
//       alarmSns,
//     })
//
//     watchful.watchScope(scope, {
//       dynamodb: true,
//       apiGateway: false,
//       lambda: false,
//     })
//
//     watchful.watchApiGateway(`${scope.stackName} Gateway`, api.restApi, {
//       serverErrorThreshold: 95,
//     })
//
//     const apiErrorsWidget = new cloudwatch.GraphWidget({
//       title: '4XX / 5XX Errors',
//       left: [api.restApi.metricClientError(), api.restApi.metricServerError()],
//       width: 12,
//     })
//     apiErrorsWidget.position(14, 12)
//     watchful.addWidgets(apiErrorsWidget)
//
//     const allFunctions = scope.getAllFunctions()
//     const totalLambdasInvocation: IMetric[] = []
//     const totalLambdasThrottles: IMetric[] = []
//
//     // group lambda metrics
//     allFunctions.forEach((lambda) => {
//       totalLambdasInvocation.push(lambda.metricInvocations())
//       totalLambdasThrottles.push(lambda.metricThrottles())
//     })
//
//     watchful.addWidgets(
//       new cloudwatch.GraphWidget({
//         title: 'Total Lambda Invocations',
//         left: totalLambdasInvocation,
//         width: 12,
//       }),
//     )
//
//     const totalLambdaThrottlesWidget = new cloudwatch.GraphWidget({
//       title: 'Total Lambda Throttles',
//       left: totalLambdasThrottles,
//       width: 12,
//     })
//     totalLambdaThrottlesWidget.position(14, 18)
//     watchful.addWidgets(totalLambdaThrottlesWidget)
//
//     // list each lambda metrics separate
//     allFunctions.forEach((lambda) => {
//       watchful.watchLambdaFunction(lambda.functionName, lambda)
//     })
//   }
// }
//
// export default DSPDashboard
