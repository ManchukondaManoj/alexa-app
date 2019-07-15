const eventEmitter = require('events')
const Sequelize = require('sequelize')

process.env.DATABASE

let postgresCredentials = {
  database:process.env.DBNAME,
  host:process.env.HOST,
  username:process.env.USERNAME,
  password:process.env.PASSWORD
}
global.connectedEmitter = new eventEmitter()
global.Op = Sequelize.Op
global.postgresSequelize = new Sequelize(postgresCredentials.database, postgresCredentials.username, postgresCredentials.password, {
  host: postgresCredentials.host,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 20000
  }
})

let seq = [postgresSequelize]

  for(let con of seq){
    con.authenticate().then(() => {
      console.log(`Connection has been established successfully for ${con.config.username}.`);
      global.connectedEmitter.emit('connectedDbs')
    }).catch(err => {
      global.connectedEmitter.emit('dbError')
      console.error('Unable to connect to the database:', err);
    });
  }
