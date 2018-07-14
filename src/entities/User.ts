export class Post {
  private name: string;
  private usernanme: string;
  private email: string;
  private password: string
  private posts: string[]

  constructor(name: string, usernanme: string, email: string, password: string, posts: string[]) {
    this.name = name;
    this.usernanme = usernanme;
    this.email = email;
    this.password = password;
    this.posts = posts
  }
}