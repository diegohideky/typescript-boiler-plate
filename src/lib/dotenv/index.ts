import dotenv from 'dotenv'

const getConfigFile = (NODE_ENV: any): string => {
  if (NODE_ENV === 'production') {
    return '.env'
  }
  return `.env.${NODE_ENV}`
}

const CONFIG_FILE = `${process.cwd()}/${getConfigFile(process.env.NODE_ENV)}`
  .replace(/\.$/, '')

console.warn('Loading config file %s', CONFIG_FILE); //eslint-disable-line

dotenv.config({ path: CONFIG_FILE })
