import { useState } from 'react';
import type { Post } from '../types/types';

export function usePostsState() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return {
    posts,
    loading,
    error,
    setPosts,
    setLoading,
    setError
  };
}