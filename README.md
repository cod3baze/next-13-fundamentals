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

- Client boundaries & encadeamento

> todo retorno de um `use client` é tratado como client component, não precisando adicionar mais a diretiva no component retornando.

```tsx
"use client";

return (
  <div>
    <h1>elias alexandre</h1>
    <Article /> // "use client"
  </div>
);

return <Article>Novo artigo</Article>;
```

para um **server component** ser usado em um `client component`, tem que ser recebido nas **props**

```tsx
"use client";

export async function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>elias alexandre</h1>
      {children} // "can be server component"
    </div>
  );
}

export async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Article>Novo artigo</Article>;
}
```

- Suspense API

  - por padrão o next aguarda todo o carregamento dos **Client components**, depois exibe o conteúdo estático da **SSR** junto.

    - a forma de evitar esse comportamento é usando a **<Suspense />** component

    ```tsx
    <Suspense fallback={<p>Loading LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Loading GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    ```

## API Route

- Cada arquivo `route.ts` que estiver na paste **api** automaticamente vira _route handler_

- Cache & Memoization: evitar calculos duplicados de forma desnecessario

- Next Cache

  - armazenar as informações de requisições passada, e reutilizar em outro cenário

  - **"force-cache"**: a requisição vai ser feita apenas 1 vez, e cacheada de tempo indeterminado.

  - **"no-store"**: a requisição vai ser feita do total zero.

  - **"next: {revalidate: 10}"**: a requisição vai ser cacheado por 10 segundos.
