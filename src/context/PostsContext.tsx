import React, { createContext, useEffect, useState } from 'react';
import type { PostsContextType } from '../types/types';
import { usePostsState } from '../hooks/usePostsState';
import { usePostsFiltering } from '../hooks/userPostsFiltering';
import { postsService } from '../services/postsService';

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const { posts, loading, error, setPosts, setLoading, setError } = usePostsState();
  const { filter, sortOrder, filteredPosts, setFilter, setSortOrder } = usePostsFiltering(posts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);
        const data = await postsService.fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error("Falha ao buscar postagens:", err);
        setError('Falha ao carregar as postagens. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const value: PostsContextType = {
    posts,
    filteredPosts,
    currentPage,
    filter,
    sortOrder,
    postsPerPage,
    loading,
    error,
    setPosts,
    setCurrentPage,
    setFilter,
    setSortOrder,
    setLoading,
    setError,
  };

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}