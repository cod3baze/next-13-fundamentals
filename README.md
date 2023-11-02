# next 13

> fundamentos

- Grupos e rotas dinâmicas

  - quando a pasta tiver aspas `(folder)`, não vai gerar resultado na URL.
  mas o ***layout*** vai ser compartilhado entre os arquivos filhos.

- Components

  - Server components: Não usa JavaScript no lado do Client. (não precisa interação do usuário).

  - Client components: JavaScript é enviado ao navegador(Cliente). possuem interatividade.

  ex:

  ```tsx
  "use client" // Client component

  function addToCart(){...}

  <button onClick={addToCart}>Adicionar</button> // Server component
  ```
