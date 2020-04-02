import './lib/dotenv'
import express, { Application } from 'express'
import expressConfig from './config/express'
import routesConfig from './config/routes'
import db from './config/db'

const { PORT } = process.env

const app: Application = express()

const init = async(): Promise<void> => {
  try {
    await db.authenticate()
    expressConfig(app);
    routesConfig(app)

    app.listen(PORT, () => {
      console.warn(`Listening to the PORT: ${PORT}`)
    })
  } catch (err) {
    console.error({ err })
  }
}

init()
