import type { Post } from '../types/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const postsService = {
  async fetchPosts(): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  async fetchPostById(id: string): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
};