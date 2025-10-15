// filepath: src/hooks/usePostsFiltering.ts
import { useState, useMemo } from 'react';
import type { Post } from '../types/types';

export function usePostsFiltering(posts: Post[]) {
  const [filter, setFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  const filteredPosts = useMemo(() => {
    let currentPosts = [...posts];

    if (filter) {
      currentPosts = currentPosts.filter(post =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (sortOrder === 'asc') {
      currentPosts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'desc') {
      currentPosts.sort((a, b) => b.title.localeCompare(a.title));
    }

    return currentPosts;
  }, [posts, filter, sortOrder]);

  return {
    filter,
    sortOrder,
    filteredPosts,
    setFilter,
    setSortOrder
  };
}