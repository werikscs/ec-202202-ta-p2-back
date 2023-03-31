export default interface IHttpServer {
  on(method: HttpMethods, url: string, callback: Function): void
  listen(port: number): void
}

export enum HttpMethods {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}
