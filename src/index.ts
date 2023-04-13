import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './interface-adapters/routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`))
