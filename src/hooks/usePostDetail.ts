import { useState, useEffect } from 'react';
import type { Post } from '../types/types';
import { postsService } from '../services/postsService';

export function usePostDetail(id: string | undefined) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPostDetail() {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await postsService.fetchPostById(id);
        setPost(data);
      } catch (err) {
        console.error("Falha ao buscar detalhes do post:", err);
        setError('Falha ao carregar os detalhes do post. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchPostDetail();
  }, [id]);

  return { post, loading, error };
}