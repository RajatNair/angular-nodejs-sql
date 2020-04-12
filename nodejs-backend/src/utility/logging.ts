export class Logging {

  private _logger: any;
  public get logger(): any {
    return this._logger;
  }
  public set logger(value: any) {
    this._logger = value;
  }

  private _loggerName: string;
  public get loggerName(): string {
    return this._loggerName;
  }
  public set loggerName(value: string) {
    this._loggerName = value;
  }

  
  private _logPath : string;
  public get logPath() : string {
    return this._logPath;
  }
  public set logPath(v : string) {
    this._logPath = v;
  }
  

  constructor(name: string, path: string = './src/logs') {
    this.loggerName = name;
    this.logPath = path;
    this.setup();
  }

  setup() {
    const opts = {
      logDirectory: this.logPath,
      fileNamePattern: "rolling-<DATE>.log",
      dateFormat: "YYYY.MM.DD",
    };
    const manager = require("simple-node-logger").createLogManager();
    manager.createRollingFileAppender(opts);
    this.logger = manager.createLogger(this.loggerName);
  }
}
