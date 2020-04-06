const parserDBUrl = require('parse-database-url')
const dotenv = require('dotenv')

const getConfigFile = (NODE_ENV) => {
  if (NODE_ENV === 'production') {
    return '.env'
  }
  return `.env.${NODE_ENV}`
}

const CONFIG_FILE = 
  `${process.cwd()}/${getConfigFile(process.env.NODE_ENV)}`
  .replace(/\.$/, '')

console.warn('Loading config file %s', CONFIG_FILE); //eslint-disable-line

dotenv.config({ path: CONFIG_FILE })

const { DATABASE_URL } = process.env

const credentials = parserDBUrl(DATABASE_URL)

module.exports = {
  username: credentials.user,
  password: credentials.password,
  database: credentials.database,
  host: credentials.host,
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  }
}
