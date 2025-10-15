import { useParams } from 'react-router-dom';
import { usePostDetail } from '../../hooks/usePostDetail';
import {
  PostDetailContainer,
  DetailTitle,
  DetailBody,
  DetailUserId,
  DetailIdContainer,
  DetailIdPost,
  BackLink,
  Message,
  ErrorMessage,
} from './PostDetail.styles';

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePostDetail(id);

  if (loading) {
    return <Message>Carregando detalhes do post...</Message>;
  }

  if (error) {
    return <ErrorMessage>Erro: {error}</ErrorMessage>;
  }

  if (!post) {
    return <Message>Post não encontrado.</Message>;
  }

  return (
    <PostDetailContainer>
      <DetailTitle>{post.title}</DetailTitle>
      <DetailIdContainer>
        <DetailUserId><strong>ID do usuário:</strong> {post.userId}</DetailUserId>
        <DetailIdPost><strong>ID do post:</strong> {post.id}</DetailIdPost>
      </DetailIdContainer>
      <DetailBody>{post.body}</DetailBody>
      <BackLink to="/">Voltar para a lista de posts</BackLink>
    </PostDetailContainer>
  );
}

export default PostDetail;