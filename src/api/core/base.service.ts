import { Logger } from "../../lib/logger";

/**
 * Base service class.
 * Exposes to the controllers and service: the context, and the logger.
 */
export default abstract class BaseService {
  protected _logger: Logger;

  constructor(filename: string, requestId?: string) {
    this._logger = new Logger(filename, requestId);
  }

  setRequestId(requestId: string) {
    this._logger.setRequestId(requestId);
  }
}