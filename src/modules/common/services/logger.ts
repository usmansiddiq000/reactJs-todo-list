import debug from 'debug';

const BASE = 'react-app';
const COLOURS = {
  trace: 'lightblue',
  info: 'blue',
  warn: 'pink',
  error: 'red',
};

class Logger {
    private namespace: string = '';
    private createDebug: any;
    generateMessage(level: keyof typeof COLOURS, message: string) {
        // Set the prefix which will cause debug to enable the message
        this.namespace = `${BASE}:${level}`;
        this.createDebug = debug(this.namespace);

        // Set the colour of the message based on the level
        this.createDebug.color = COLOURS[level];
        this.createDebug(message);
    }

    trace(message: string) {
        return this.generateMessage('trace', message);
    }

    info(message: string) {
        return this.generateMessage('info', message);
    }

    warn(message: string) {
        return this.generateMessage('warn', message);
    }

    error(message: string) {
        return this.generateMessage('error', message);
    }
}

export default new Logger();