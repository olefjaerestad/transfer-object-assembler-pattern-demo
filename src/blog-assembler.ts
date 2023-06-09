import { Post, PostResource, postResourceSchema } from "./blog-types";

export class BlogAssembler {
  private constructor() {
    /** Don't instantiate - use static members. */
  }

  static import(src: PostResource): Post {
    postResourceSchema.parse(src);

    return {
      id: src.id,
      title: src.title,
      content: src.content || '',
    }
  }

  static export(src: Post): PostResource {
    postResourceSchema.parse(src);

    return {
      id: src.id,
      title: src.title,
      content: src.content,
    }
  }
}
