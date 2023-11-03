# next 13

> fundamentos

- Grupos e rotas dinâmicas

  - quando a pasta tiver aspas `(folder)`, não vai gerar resultado na URL.
    mas o **_layout_** vai ser compartilhado entre os arquivos filhos.

- Components

  - Server components: Não usa JavaScript no lado do Client. (não precisa interação do usuário).

  - Client components: JavaScript é enviado ao navegador(Cliente). possuem interatividade.

  ex:

  ```tsx
  "use client" // Client component

  function addToCart(){...}

  <button onClick={addToCart}>Adicionar</button> // Server component
  ```

- Loading e Streaming SSR

  - arquivo: `loading.tsx`: será exibido enquanto a página estiver carregando. herda também o `layout`. se o arquivo estiver na raiz `app`, o arquivo **loading** passa a valer para todas as rotas da aplicação

  - Streaming SSR => Ler/escrever dados de forma parcial + Server Side Render

    - Renderizar um component do lado do servidor de forma parcial. ex: busca de dados em componentes asíncronos
