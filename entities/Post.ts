export class Post {
  private title: string;
  private slug: string;
  private content: string;
  private featuredImage: string

  constructor(title: string, slug: string, content: string, featuredImage: string) {
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.featuredImage = featuredImage;
  }
}