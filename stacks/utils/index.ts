// import { ApiGatewayV1ApiCustomDomainProps } from '@serverless-stack/resources'
//
// export const DOMAIN = {
//   DEV: 'TODO',
//   PROD: 'TODO',
// } as const
//
// export const customDomainForStage = (stage: string): ApiGatewayV1ApiCustomDomainProps | undefined => {
//   const isProd = stage === 'prod'
//
//   if (!['dev', 'prod'].includes(stage)) {
//     // default to no custom domain
//     // TODO: figure out easy way to deploy multiple paths on the same domain
//     // currently adds complexity as you need to dynamically create a new domain
//     // or attach to one created previously
//     return
//   }
//
//   return {
//     domainName: isProd ? DOMAIN.PROD : DOMAIN.DEV,
//     hostedZone: 'todo.com',
//     path: isProd ? 'api' : stage,
//   }
// }
