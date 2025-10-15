import styled from 'styled-components';

export const PostListContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  max-width: 960px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-grow: 1;
  min-width: 200px;
`;

export const Button = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.buttonHoverBg : theme.colors.buttonBg)};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBg};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.small};
`;

export const PaginationButton = styled(Button)<{ isActive?: boolean }>`
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.secondary)};

  &:hover {
    background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.buttonHoverBg)};
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

