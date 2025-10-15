import { useMemo } from 'react';
import type { Post } from '../types/types';

interface PaginationReturn {
  currentPosts: Post[];
  totalPages: number;
  indexOfFirstPost: number;
  indexOfLastPost: number;
}

export function usePagination(
  posts: Post[],
  currentPage: number,
  postsPerPage: number
): PaginationReturn {
  return useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return {
      currentPosts,
      totalPages,
      indexOfFirstPost,
      indexOfLastPost,
    };
  }, [posts, currentPage, postsPerPage]);
}