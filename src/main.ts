import { createPost, getPost } from './blog-api';
import { BlogAssembler } from './blog-assembler';

getPost().then((post) => {
  const assembledPost = BlogAssembler.import(post);

  const html = `
    <h1>${assembledPost.title}</h1>
    <p>${assembledPost.content}</p>
  `;

  const container = document.getElementById('post');

  if (container) {
    container.innerHTML = html;
  }
});

updatePost(BlogAssembler.export({id: '123', title: 'My second blogpost', content: ''})).then((post) => {})
