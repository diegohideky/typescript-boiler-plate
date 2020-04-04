import './lib/dotenv'
import express, { Application } from 'express'
import expressConfig from './config/express'
import routesConfig from './config/routes'

class AppCtrl {
  public app: Application

  constructor() {
    this.app = express()

    this.initConfig()
    this.initRoutes()
  }

  private initConfig(): void {
    expressConfig(this.app)
  }

  private initRoutes(): void {
    routesConfig(this.app)
  }
}

export default new AppCtrl().app
