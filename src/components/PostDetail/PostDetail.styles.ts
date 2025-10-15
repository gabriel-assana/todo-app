import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostDetailContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing.large} auto;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DetailTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

export const DetailIdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const DetailUserId = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

export const DetailIdPost = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9em;
  font-weight: bold;
  text-align: center;
  min-width: 60px;
`;

export const DetailBody = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const BackLink = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.buttonText};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #5a6268;
  }
`;

export const Message = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorMessage = styled(Message)`
  color: red;
`;