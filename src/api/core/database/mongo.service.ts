import mongoose from 'mongoose'
import { env } from 'src/env';
import { ILoggerInterface } from 'src/lib/logger';
import { MongoConnection } from './mongo.connection';
import { IDatabaseService, IMongoFilter, IMongoOptions, SortDirection } from './mongo.interface';



export class MongoService implements IDatabaseService {
  private _retries: number;
  private _retryTimeout: number;

  private _connection: Promise<typeof mongoose>;
  private mongoURI = `mongodb+srv://${env.db.username}:${env.db.password}@cluster0.er9xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  constructor(mongoOptions: IMongoOptions) {
   

    this._connection = mongoose
    .connect(this.mongoURI)

  }

  public getConnection(logger?: ILoggerInterface): MongoConnection {
    return new MongoConnection(this._connection, this._retries, this._retryTimeout, logger);
  }

  public constructFilters(prefix: string, filters: IMongoFilter[]): string {
    const query = `${filters.reduce(
      (prev, curr) => `${prev}${prefix}.${curr.type} ${curr.isArray ? "IN" : "=="} ${curr.value} AND `,
      ""
    )}${prefix}.isActive == true`;
    return query;
  }

  
  public async createCollection(
    name: string,
    deletePrevious?: boolean,
  ): Promise<boolean> {
    const doesExist = await this._connection.listCollections({name: 'mycollectionname'})
    .next(function(err, collinfo) {
        if (collinfo) {
            // The collection exists
        }
    });

    if (!doesExist) {
      await this._connection.createCollection(name, options);
    } else {
      if (deletePrevious) {
        await this._connection.collection(name).drop();
        await this._connection.createCollection(name, options);
      }
    }
    return true;
  }

  public async createEdge(name: string, deletePrevious?: boolean, options?: CreateCollectionOptions): Promise<boolean> {
    const doesExist = await this._connection.collection(name).exists();
    if (!doesExist) {
      await this._connection.createEdgeCollection(name, options);
    } else {
      if (deletePrevious) {
        await this._connection.collection(name).drop();
        await this._connection.createEdgeCollection(name, options);
      }
    }
    return true;
  }


  /**
   *
   * @param {number} itemsPerPage
   * @param {number} pageNumber
   * @returns {string}
   */
  public constructLimit(itemsPerPage:number, pageNumber:number): string {
    let query = "";
		if(itemsPerPage>=0 && pageNumber>=0)
		{
			const startId = pageNumber * itemsPerPage;
			query = `LIMIT ${startId}, ${itemsPerPage} `	
		}
		return query;
  }


   /**
    *
    * @param {SortDirection} sortOrder  ASC/DESC 
    * @param {string} sortBy name of the field
    * @param {string} prefix letter or word that will prefix
    * @returns {string} sort query
    */
  public constructSort(sortOrder: SortDirection, sortBy: string, prefix: string): string {
    let query = "";
		if(sortOrder && sortBy)
		{
			query = `SORT ${prefix}.${sortBy} ${sortOrder}`	
		}
		return query;
  }
}