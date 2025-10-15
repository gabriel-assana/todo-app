import type { Post } from '../../types/types';
import {
  PostItemContainer,
  PostTitle,
  PostLink,
  PostBody,
  UserIdContainer,
  UserIdText,
  PostIdBadge,
} from './PostItem.styles';
interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  return (
    <PostItemContainer>
      <PostLink to={`/post/${post.id}`}>
        <PostTitle>{post.title}</PostTitle>
      </PostLink>
      <PostBody>{post.body.substring(0, 100)}...</PostBody>
      <UserIdContainer>
        <UserIdText><strong>ID do usuario:</strong> {post.userId}</UserIdText>
        <PostIdBadge><strong>ID do post:</strong> {post.id}</PostIdBadge>
      </UserIdContainer>
    </PostItemContainer>
  );
}

export default PostItem;
