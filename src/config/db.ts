import Sequelize from 'sequelize'
// @ts-ignore
import config from '../database'

// @ts-ignore
const db = new Sequelize(config)

export default db
