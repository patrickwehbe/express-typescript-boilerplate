import { ILoggerInterface } from "src/lib/logger";

export interface IDatabaseFilter {
  type: string;
  value: any;
}

export interface IMongoFilter extends IDatabaseFilter {
  isArray?: boolean;
}

export interface ISchema {
  name: string;
 
}

export interface IMongoOptions {
  username: string;
  password: string;
}

export interface IPaginationMetaData {
	itemsPerPage:number;
	totalItems:number;
	totalPages:number
}

export type SortDirection = "ASC" | "DESC";
export interface IDatabaseService {
  /**
   * Creates a new wrapper of the connection to the specified database then returns it
   * @param logger logger used in the main app (optional)
   */
  getConnection(logger?: ILoggerInterface): void;

  /**
   * Generic function that constructs database filters based on implementation class
   * @param prefix letter or word that will prefix the filters (e.g: **user** is the prefix in **user.name**)
   * @param filters array of filters to filter by, such as id value or name value
   */
  constructFilters(prefix: string, filters: IDatabaseFilter[]): string;


  /**
   * Creates a new collection inside the database
   * @param name Collection name that will be created
   */
  createCollection(name: string,  deletePrevious?: boolean,
    ): Promise<boolean>;

 
  /**
   * Function that construct sorting query based on implementation class
   * @param {SortDirection} sortOrder  ASC/DESC 
   * @param {string} sortBy name of the field
   * @param {string} prefix letter or word that will prefix
   * @returns {string} sort query
   */
  constructSort(sortOrder:SortDirection, sortBy:string, prefix:string):string

  /**
   * Function that construct pagination query based on implementation class
   * @param {number} itemsPerPage
   * @param {number} pageNumber 
   * @returns {string} pagination query
   */
  constructLimit(itemsPerPage:number, pageNumber:number): string
}

