const morgan = require('morgan')
const winston = require('winston')
winston.emitErrs = true

const winstonLogger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        }),
    ],
    exitOnError: false,
})

const stream = {
    write: (message, encoding) => {
        winstonLogger.info(message)
    }
}

const combinedLogger = morgan('combined', { 'stream': stream })

module.exports = { logger: combinedLogger, log: winstonLogger }
