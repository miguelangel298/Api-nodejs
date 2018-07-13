export interface IRead<T> {
  find(item: T): Promise<boolean>;
  findOne(id: string): Promise<boolean>;
}