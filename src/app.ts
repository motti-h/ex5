import express from 'express';
import cors from 'cors';
import {config} from './routes/routeConfig';
import expressWinston from 'express-winston';
import winston from 'winston';
import * as middle from './utils/middleware';
import {initPassport} from './utils/passport';

const alignedWithColorsAndTime = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf((info) => {
    const {
      timestamp, level, message, ...args
    } = info;

    const ts = timestamp.slice(0, 19).replace('T', ' ');
    return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
  }),
);
initPassport();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: alignedWithColorsAndTime,
}));

Object.keys(config).forEach((k) => {
    const routeConfig = config[k];
    app.use(routeConfig.prefix, routeConfig.router);
  });

app.use(expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: alignedWithColorsAndTime,
}));

app.use(middle.endError);
export { app };
