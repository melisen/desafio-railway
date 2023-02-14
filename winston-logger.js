const winston = require('winston');
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports : [
      new winston.transports.Console({level:"info"}),
      new winston.transports.File({ filename: './warn.log', level:'warn' }),
      new winston.transports.File({ filename: './error.log', level:'error' }),
  ]
})

//logger.add(new transports.Console({level:"info"}))

module.exports = logger;