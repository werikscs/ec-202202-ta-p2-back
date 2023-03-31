import { Server } from 'http'
import cors from 'cors'
import express, { Express, Response, Request } from 'express'
import IHttpServer, { HttpMethods } from './http-server'

export default class ExpressHttpServer implements IHttpServer {
  private app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors())
  }

  on(method: HttpMethods, url: string, callback: Function): void {
    this.app[method](url, async function (req: Request, res: Response) {
      try {
        const output = await callback(req.params, req.body)
        res.json(output)
      } catch (error: any) {
        res.status(error.status).json({ message: error.message })
      }
    })
  }

  listen(port: number): Server {
    return this.app.listen(port, () =>
      console.log(`Server running on port ${port}`),
    )
  }
}
