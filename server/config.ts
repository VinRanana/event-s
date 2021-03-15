interface Config {
  port: number,
  host: string,
  dbName: string,
  dbPort: string
}

export const config: Config = {
  port: 4000,
  host: 'localhost',
  dbName: 'solo',
  dbPort: '27017'
}

// store in a .env file
