# Projeto Cookenu

## Processo de Desenvolvimento

-   [1. Resumo do Projeto](#1-resumo-do-projeto)
-   [2. Fluxograma de Telas](#2-fluxograma-de-telas)
-   [3. Wireframe de Telas](#3-wireframe-de-telas)
-   [4. API utilizada](#4-api-utilizada)
-   [5. Configurações: Create React App](#5-configurações-create-react-app)
-   [6. Organização de pastas](#6-organização-de-pastas)
-   [7. Roteamento](#7-roteamento)
-   [8. Styled Components](#8-styled-components)
-   [9. Chakra-UI](#9-chakra-ui)
-   [10. Constants](#10-constants)
-   [11. Header](#11-header)

## 1. Resumo do Projeto

-   Cookenu é um projeto de revisão do módulo de react com APIs, design systems e routes

-   A aplicação consiste em um site de receitas com as seguintes telas:
    -   Login
    -   Cadastro
    -   Lista de Receitas
    -   Detalhes da Receita
    -   Adicionar Receita

## 2. Fluxograma de Telas

![Fluxograma de Telas](./src/images/images-readme/image-0.png)

## 3. Wireframe de Telas

### Tela - Login:

![Tela - Login](./src/images/images-readme/image-1.png)

### Tela - Cadastro:

![Tela - Cadastro](./src/images/images-readme/image-2.png)

### Tela - Lista de Receitas:

![Alt text](./src/images/images-readme/image-3.png)

### Tela - Detalhes da Receita:

![Alt text](./src/images/images-readme/image-4.png)

### Tela - Adicionar Receita:

![Alt text](./src/images/images-readme/image-5.png)

## 4. API utilizada:

Clique [aqui](https://documenter.getpostman.com/view/21151478/2s8YzMZRju#intro) para ser direcionado para a documentação da API Cookenu utilizada no projeto

## 5. Configurações: Create React App

-   Para criar um projeto React com CRA utilizei o comando:

    ```
    npx create-react-app cookenu
    ```

### O que pode remover após a criação do projeto react:

-   Dentro da pasta `cookenu`:

    ![Alt text](./src/images/images-readme/image-6.png)

-   Dentro de `src`:<br>
    ![Alt text](./src/images/images-readme/image-7.png)

-   Em `App.js`, excluir as importações e limpar conteúdo:
    ![Alt text](./src/images/images-readme/image-8.png)

    ![Alt text](./src/images/images-readme/image-9.png)

-   No `index.js` presente dentro da `src`, limpar importações:
    ![Alt text](./src/images/images-readme/image-10.png)
    ![Alt text](./src/images/images-readme/image-11.png)

-   Em `package.json` excluir as bibliotecas que não estão mais sendo usadas:
    ![Alt text](./src/images/images-readme/image-14.png)

## 6. Organização de pastas

-   Dentro de `src` criei uma pasta `pages`, e cada página tem sua pasta e um arquivo `index.js`.
    ![Alt text](./src/images/images-readme/image-12.png)

-   Importante notar que `pages` possui seu próprio arquivo `index.js`, utilizado para fazer importações em um só lugar:<br>
    ![Alt text](./src/images/images-readme/image-13.png)

    -   O arquivo `index.js` de `pages` possui a seguinte estrutura:

        ```
        export * from './add-recipe';
        export * from './feed';
        export * from './login';
        export * from './recipe-detail';
        export * from './signup';
        ```

    -   Dessa forma quando eu chamar qualquer página, posso refenciar o `index.js` de `pages`:
        ```
        import {
            LoginPage,
            SignupPage,
            FeedPage,
            RecipeDetailPage,
            AddRecipePage,
        } from '../pages';
        ```

## 7. Roteamento

-   Como o react router é uma biblioteca, precisamos fazer a instalação com o seguinte comando:

    ```
    npm install react-router-dom
    ```

-   Dentro da `src` criei uma pasta chamada `routes` e dentro dela um arquivo chamado `router.js`, dentro desse arquivo o seguinte código:

    ```
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import {
        LoginPage,
        SignupPage,
        FeedPage,
        RecipeDetailPage,
        AddRecipePage,
    } from '../pages';

    export const Router = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/add-recipe" element={<AddRecipePage />} />
                    <Route path="/feed" element={<FeedPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        );
    };
    ```

-   Com as rotas criadas, é necessário chama-la no `App.js` da seguinte forma:

    ```
    import { Router } from './routes';

    const App = () => {
        return (
            <Router />
        );
    };

    export default App;
    ```

    -   A partir desse momento é possível testar as rotas mudando a URL e verificar se o que tem em cada página está aparecendo de forma correta.

-   Ainda dentro da pasta `routes`, criei um arquivo chamado `coordinator.js` responsável por armazenar as funções que irão fazer a troca de páginas, segue o código do `coordinator.js`:

    ```
    export const goToLoginPage = (navigator) => {
        navigator('/login');
    };

    export const goToSignupPage = (navigator) => {
        navigator('/signup');
    };

    export const goToFeedPage = (navigator) => {
        navigator('/feed');
    };

    export const goToRecipeDetailPage = (navigator, id) => {
        navigator(`/recipe/:${id}`);
    };

    export const goToAddRecipePage = (navigator) => {
        navigator('/add-recipe');
    };
    ```

## 8. Styled Components

### Instalação:

        ```
        npm install styled-components@latest
        ```

## 9. Chakra-UI

### Instalação:

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Setup do `chakra-ui`:

Em `App.js` importei o `ChakraProvider` e englobei todo meu conteúdo com ele:

    ```
    (...)
    import { ChakraProvider } from '@chakra-ui/react'
    (...)
    const App = () => {
        return (
            <ChakraProvider>
                <Router />
            </ChakraProvider>
        );
    };
    (...)
    ```

### Utilizando Theme

Para utilizar os temas do `chakra-ui`, dentro de `src` criei uma pasta chamada `styles`. E dentro dessa pasta um arquivo chamado `index.js` e um arquivo chamado `theme.js`

-   Conteúdo do `index.js`:

    ```
    export * from './theme';
    ```

-   Para customizar o tema verifiquei nessa [documentação](https://chakra-ui.com/docs/styled-system/customize-theme) o procedimento:

    ```
    // 1. Import `extendTheme`
    import { extendTheme } from "@chakra-ui/react"

    // 2. Call `extendTheme` and pass your custom values
    const theme = extendTheme({
    colors: {
        brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
        },
    },
    })

    // 3. Pass the new theme to `ChakraProvider`
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>

    // 4. Now you can use these colors in your components
    function Usage() {
    return <Box bg="brand.100">Welcome</Box>
    }
    ```

-   Conteúdo de `theme.js`:

    ```
    import { extendTheme } from '@chakra-ui/react';

    export const theme = extendTheme({
        // colors: {
        //     brand: {
        //         100: '#f7fafc',
        //         // ...
        //         900: '#1a202c',
        //     },
        // },
    });
    ```

-   Passei o tema para o provider dessa forma:

    ```
    (...)
    import { theme } from './styles';
    const App = () => {
        return (
            <ChakraProvider theme={theme}>
                <Router />
            </ChakraProvider>
        );
    };
    (...)
    ```

## 10. Constants

Dentro de `src` criar uma pasta chamada `constants` e dentro dela um arquivo chamado `index.js`, o arquivo mencionado possui o seguinte código:

```
export const BASE_URL = 'https://api-cookenu.onrender.com';
```

## 11. Header

### Chamado do Header

Como o `Header` é comum em todas as páginas, por isso irei colocar o Header dentro de `router.js` para que o código não seja repetido. Porque coisas que não são dependentes de rotas mas estiverem **dentro** de `<BrowserRouter>` serão renderizadas _sempre_!

Por isso o `Header` será chamado aqui:
![Localização Header](./src/images/images-readme/image-15.png)

### Criação do Header

Em `src` criei uma pasta `components` que vai armazenar os componentes comum da aplicação, ou seja, componentes que não dependerem de uma página só e sim serão divididos entre todos.

Dentro de `components` criei um `index.js` e uma pasta para cada componente

No `index.js` de `components` tenho a seguinte exportação:

```
export * from './header';
```

E em `header` irei criar o componente normalmente e depois importar no `Router`

Código do `index.js` de `header`:

```
import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react';

export const Header = () => {
    return (
        <HeaderStyled>
            <Button variant="header">Cookenu</Button>
            <Button variant="header">Login</Button>
        </HeaderStyled>
    );
};
```

Código do `styled.js` de `header`:

```
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderStyled = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.laranja['500']};
`;
```

### Configurações do `theme.js` da pasta `styles` que foi utilizada no `Header`:

```
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {
                    _hover: {
                        bg: 'yellow.500',
                        transition: 'bg 0.3s ease-in-out',
                    },
                },
            },
        },
    },
    colors: {
        laranja: {
            500: '#FE7E02',
        },
        yellow: {
            500: '#f9b24e',
        },
    },
});
```
