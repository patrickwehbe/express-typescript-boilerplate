

export class ArangoConnection  {
  protected instance: Database;

  private _retries: number;
  private _retryTimeout: number;

  /**
   * Wraps the arango connection with helper functions suchs as `.query()` and `.transaction()`
   * @param db Arango database
   * @param logger logger used in the main app (optional)
   * @param retries Number of retries in case of connection failure
   * @param retryTimeout Time before trying to connect again
   * @param logger logger used in the main app (optional)
   */
  constructor(db: Database, retries: number, retryTimeout: number, logger?: ILogger) {
    super(logger);
    this.instance = db;

    this._retries = retries;
    this._retryTimeout = retryTimeout;
  }

  
}