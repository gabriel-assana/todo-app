export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsContextType {
  posts: Post[];
  filteredPosts: Post[];
  currentPage: number;
  filter: string;
  sortOrder: 'asc' | 'desc' | '';
  postsPerPage: number;
  loading: boolean;
  error: string | null;
  setPosts: (posts: Post[]) => void;
  setCurrentPage: (page: number) => void;
  setFilter: (filter: string) => void;
  setSortOrder: (order: 'asc' | 'desc' | '') => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
