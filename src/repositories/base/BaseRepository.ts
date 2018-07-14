// import all interfaces

import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

// import moongose

import { MongoClient, Db, Collection, InsertOneWriteOpResult, FilterQuery } from 'mongodb'

//that class only ca be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //creating a property to use your code in all instaces
  //that extends your base repository and reuse on mehods of class
  public readonly _collection: Collection;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }
  // we add to method, the async keyword to manipulate the insert result
  // of method.
  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult = await this._collection.insert(item);
    // after the insert operations, we returns only ok property (that haves a 1 or 0 results)
    // and we convert to boolean result (0 false, 1 true)
    return !!result.result.ok;
  }

  async find(item: T): Promise<boolean> {
    const result = await this._collection.find(item)

    return !!result.read
  }

  // find(item: T): Promise<boolean> {
  //   throw new Error("Method not implemented.");
  // }
  findOne(id: string): Promise<boolean> {
    const result = this._collection.findOne({'title': id})

    return result
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}