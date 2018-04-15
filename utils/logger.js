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

winstonLogger.remove(winstonLogger.transports.Console);
winstonLogger.add(winstonLogger.transports.Console, {
    colorize: true
});

const stream = {
    write: (message, encoding) => {
        winstonLogger.info(message)
    }
}

const morgan = require('morgan')

const combinedLogger = morgan('combined', { 'stream': winstonLogger.stream })

module.exports = { logger: combinedLogger }
