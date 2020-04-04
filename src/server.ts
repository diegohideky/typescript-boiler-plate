import db from './config/db'
import app from './app'

const { PORT } = process.env

class Server {
  constructor() {
    this.init()
  }

  private async init(): Promise<void> {
    try {
      await db.authenticate()

      app.listen(PORT, () => {
        console.warn(`Listening to the PORT: ${PORT}`)
      })
    } catch (err) {
      console.log({ err })
    }
  }
}

export default new Server()
