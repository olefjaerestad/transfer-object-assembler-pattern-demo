import { PostResource } from "./blog-types";

export async function getPost(): Promise<PostResource> {
  return {
    id: '1',
    title: 'My first blogpost',
  }
}

export async function updatePost(post: PostResource): Promise<PostResource> {
  return post
}
