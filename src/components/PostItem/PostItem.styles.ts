import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostItemContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PostTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostBody = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const UserIdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserIdText = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0;
`;

export const PostIdBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
  min-width: 30px;
`;

