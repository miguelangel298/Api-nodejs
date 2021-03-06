import { Router, Request, Response, NextFunction } from 'express';
import { PostRepository } from '../repositories/PostRepository';
import { Post } from '../entities/Post'
import { MongoClient } from 'mongodb';

class PostRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();;
  }

  /**
   * GetPosts
   */
  public GetPosts(req: Request, res: Response): void {
   

  }

  /**
  * GetPosts
  */
  public GetPost(req: Request, res: Response): void {
    (async () => {
      const slug: string = req.params.slug
      // connecting at mongoClient
      const connection = await MongoClient.connect('mongodb://localhost');
      const db = connection.db('tes');
      const post = {
        title: slug
      };
      // initializing the repository
      const repository = new PostRepository(db, 'tes');

      // call create method from generic repository
      const result = await repository.getPost(post);
      res.json({
        result,
      });
    })();
  }

  /**
  * CreatePost
  */
  public CreatePost(req: Request, res: Response): void {

    (async () => {

      const title: string = req.body.title;
      const content: string = req.body.content;
      const featuredImage: string = req.body.featuredimage;
      const slug: string = req.body.slug

      // connecting at mongoClient
      const connection = await MongoClient.connect('mongodb://localhost');
      const db = connection.db('tes');

      // our operations
      // creating a post
      const post = new Post(title, content, slug, featuredImage);

      // initializing the repository
      const repository = new PostRepository(db, 'tes');

      // call create method from generic repository
      const result = await repository.create(post);

      //call specific method from post class
      const count = await repository.countOfPosts();

      res.json({
        result,
        count
      });

      /**
       * post inserted with success
        the count of posts is 1
       */
    })();

  }

  /**
  * UpdatePost
  */
  public UpdatePost(req: Request, res: Response): void {
    
  }

  /**
  * DeletePosts
  */
  public DeletePost(req: Request, res: Response): void {

  }

  routes() {
    this.router.get('/', this.GetPosts);
    this.router.get('/:slug', this.GetPost);
    this.router.post('/', this.CreatePost);
    this.router.put('/:slug', this.UpdatePost);
    this.router.delete('/:slug', this.DeletePost);

  }
}

// export
const postRoutes = new PostRouter();
postRoutes.routes()

export default postRoutes.router;