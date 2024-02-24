import winston from "winston";
import type DailyRotateFile from "winston-daily-rotate-file";

const fileTransport: DailyRotateFile = new winston.transports.DailyRotateFile({
    filename: "./logs/app-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "1m",
    maxFiles: "14m",
    level: "error",
    handleExceptions: true
});

const consoleTransport: winston.transports.ConsoleTransportInstance =
    new winston.transports.Console({
        level: "silly",
        handleExceptions: true,
        format: winston.format.combine(winston.format.colorize({ all: true }))
    });

const logger: winston.Logger = winston.createLogger({
    level: "silly",
    format: winston.format.combine(
        winston.format.json({ space: 2 }),
        winston.format.timestamp({
            format: "YYY_MM_DD hh:mm:ss A"
        }),
        winston.format.label({ label: "[LOGGER]" }),
        winston.format.printf(
            (log) =>
                `${log.label} ${log.timestamp} ${log.level} : ${log.message}`
        )
    ),
    transports: [fileTransport, consoleTransport]
});

export default logger;
