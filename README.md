# Post List App

## 📝 Sobre o Projeto

Este é um aplicativo React que consome a API JSONPlaceholder (https://jsonplaceholder.typicode.com) para exibir e gerenciar posts. O projeto foi desenvolvido utilizando TypeScript e implementa várias funcionalidades modernas do React, incluindo hooks personalizados e gerenciamento de estado global.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Styled Components
- React Router DOM
- Vite

## 📚 Recursos e Funcionalidades

- **Listagem de Posts**: Visualização de posts com paginação
- **Detalhes do Post**: Página dedicada para visualizar detalhes completos de cada post
- **Filtro de Posts**: Busca por título
- **Ordenação**: Possibilidade de ordenar posts em ordem alfabética (A-Z e Z-A)
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Gerenciamento de Estado e Hooks

### Context API e useContext
O projeto utiliza o Context API do React para gerenciamento de estado global através do `PostsContext`. Este contexto fornece:

- Gerenciamento centralizado dos posts
- Estado de carregamento e erros
- Filtros e ordenação
- Paginação
- Estados compartilhados entre componentes

Exemplo de uso do Context:
```typescript
// Provedor do Contexto (PostsContext.tsx)
export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  // ... lógica do contexto
  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}

// Uso em componentes
const {
  filteredPosts,
  currentPage,
  filter,
  sortOrder,
  // ... outros valores e funções
} = useContext(PostsContext);
```

### Hooks do React
- `useState`: Gerenciamento de estado local (filtros, paginação)
- `useEffect`: Gerenciamento de efeitos colaterais (chamadas à API)
- `useContext`: Acesso ao estado global via PostsContext
- `useMemo`: Memorização de valores computados (filtragem e ordenação)

### Hooks Personalizados
- `usePostsState`: Gerenciamento do estado dos posts e loading
- `usePostsFiltering`: Lógica de filtragem e ordenação com memorização
- `usePostDetail`: Busca e gerenciamento de detalhes de um post específico
- `usePagination`: Controle de paginação com cálculos memorizados

## 🎨 Estilização

O projeto utiliza `styled-components` para estilização, proporcionando:
- Componentes estilizados reutilizáveis
- Tematização global
- Estilização baseada em props
- CSS-in-JS com tipagem

## 📁 Estrutura do Projeto

```
src/
  ├── components/
  │   ├── PostList/
  │   ├── PostDetail/
  │   └── PostItem/
  ├── context/
  │   └── PostsContext.tsx
  ├── hooks/
  │   ├── usePostDetail.ts
  │   ├── usePostsState.ts
  │   ├── usePostsFiltering.ts
  │   └── usePagination.ts
  ├── services/
  │   └── postsService.ts
  ├── styles/
  │   ├── theme.ts
  │   └── GlobalStyle.ts
  └── types/
      └── types.ts
```

## 🚀 Como Executar o Projeto

1. Clone o repositório
```bash
git clone https://github.com/gabriel-assana/todo-app.git
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm run dev
```

## 📌 Funcionalidades Principais

- **Listagem de Posts**
  - Paginação
  - Filtro por título
  - Ordenação alfabética
  - Exibição de ID do usuário e do post

- **Detalhes do Post**
  - Visualização completa do conteúdo
  - Informações do autor
  - Navegação entre posts

## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm run lint`: Executa a verificação de código
- `npm run preview`: Visualiza a versão de produção

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Autor

Gabriel Assana

---

⌨️ com ❤️ por [Gabriel Assana](https://github.com/gabriel-assana)