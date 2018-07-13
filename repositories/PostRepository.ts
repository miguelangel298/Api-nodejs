import { BaseRepository } from './base/BaseRepository';
import { Post } from '../entities/Post'

export class PostRepository extends BaseRepository<Post> {

  countOfPosts(): Promise<number> {
    return this._collection.count({})
  }
}