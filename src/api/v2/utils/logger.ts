import pino, { levels } from "pino";

export const filetransport = pino.transport({
  target: "pino/file",
  options: { destination: `${__dirname}/log.txt` },
});

export const logger = pino(
  {
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  filetransport
);
