export default interface IHttpServer {
  on(method: HttpMethods): void
  listen(port: number): void
}

export enum HttpMethods {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}
