import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
import { usePagination } from '../../hooks/usePagination';
import PostItem from '../PostItem/PostItem';
import {
  PostListContainer,
  Title,
  ControlsContainer,
  Input,
  Button,
  PaginationContainer,
  PaginationButton,
  Message,
  ErrorMessage,
} from './PostList.styles';

function PostList() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('PostList deve ser usado dentro de um PostsProvider');
  }

  const {
    filteredPosts,
    currentPage,
    filter,
    sortOrder,
    postsPerPage,
    loading,
    error,
    setFilter,
    setSortOrder,
    setCurrentPage,
  } = context;

  const { currentPosts, totalPages } = usePagination(
    filteredPosts,
    currentPage,
    postsPerPage
  );

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (newSortOrder: 'asc' | 'desc' | '') => {
    setSortOrder(newSortOrder);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PostListContainer>
      <Title>Posts</Title>

      <ControlsContainer>
        <Input
          type="text"
          placeholder="Filtrar por título..."
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />

        <Button
          isActive={sortOrder === 'asc'}
          onClick={() => handleSortChange('asc')}
        >
          Ordenar A-Z
        </Button>
        <Button
          isActive={sortOrder === 'desc'}
          onClick={() => handleSortChange('desc')}
        >
          Ordenar Z-A
        </Button>
        <Button
          isActive={sortOrder === ''}
          onClick={() => handleSortChange('')}
        >
          Remover Ordenação
        </Button>
      </ControlsContainer>

      {loading && <Message>Carregando posts...</Message>}
      {error && <ErrorMessage>Erro: {error}</ErrorMessage>}

      {!loading && !error && (
        <div>
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => <PostItem key={post.id} post={post} />)
          ) : (
            <Message>Nenhum post encontrado.</Message>
          )}

          <PaginationContainer>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationButton
                key={i + 1}
                isActive={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationButton>
            ))}
          </PaginationContainer>
        </div>
      )}
    </PostListContainer>
  );
}

export default PostList;