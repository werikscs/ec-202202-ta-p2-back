import 'dotenv/config'
import ExpressHttpServer from './infra/http/express-http-server'

async function main() {
  const httpServer = new ExpressHttpServer()
  httpServer.listen(3000)
}

main()
