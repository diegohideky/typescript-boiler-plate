import { Application } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from '../middlewares/cors'

export default (app: Application): void => {
app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(cors)
  app.use(helmet())
  app.use(morgan('dev'))
}
