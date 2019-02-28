<h1 align="center">
  My React WebSite by JuananRodriguez
</h1>

Este es un **proyecto personal** donde construir mi propia librería de elementos, componentes y escenas totalmente documentada con Docz, estilizada mediante Styled-Component. Esta librería será usada para mantener mi web personal a modo de CV bajo el entorno de Gatsby CLI ( Reactjs ).

## 🚀 Recursos principales

1. [React js](https://reactjs.org/docs/getting-started.html).
1. [Gastby CLI](https://www.gatsbyjs.org/docs/).
3. [Docz](https://www.docz.site/documentation).
4. [Styled-Component](https://www.styled-components.com/docs).  
5. (TODO): [Heroku](https://www.heroku.com/)

## 🚀 Comandos para desarrollar

Todos estos comandos deben ser ejecutados desde la carpeta del proyecto
    
    cd my-react-website/
    
1.  **Desarrollo con Gastby**
    ```sh
    gatsby develop
    ```
1.  **Desarrollo con Docz**
    ```sh
    yarn doc:dev
    ```

## 🚀 Comandos para producción

Todos estos comandos deben ser ejecutados desde la carpeta del proyecto
    
    cd my-react-website/
    
1.  **Desarrollo con Gastby**
    ```sh
    gatsby build
    ```
1.  **Desarrollo con Docz**
    ```sh
    yarn doc:build
    ```


## 🧐 Estructura de la carpeta src ( source )

 Las carpetas del proyecto están estructuradas de la siguiente manera:

    .
    ├── components
    ├── elements
    ├── scenes
    ├── pages
    ├── redux
    |   ├── actions
    |   └── reducers
    └── configurations

1.  **`/components`**: Contiene los *components* React utilizados por las scenes de la aplicación. Estos componentes están conformados los *elemets*.

2.  **`/elements`**: Contiene la mínima expresión de un component. Elementos representacionales estilizados con Styled-components. Estos elementos tienen significado por si mismos y no se componen de otros elementos ( para eso están los componentes ).

3.  **`/scenes`**: Son representaciones complejas de fragmentos de las páginas: Headers, Main, Footers, etc. 

4.  **`/pages`**: Son la construcción de las páginas finales que verá el usuario. Están formados por la conjunción de diferentes scenes.

5.  **`/redux`**: Contiene el estado general y compartido de la aplicación dentro de los reducers y las aciones propias para cambiar este estado en la carpeta action. 

6.  **`/configurations`**: Configuraciones generales de la aplicación, como el theme usado por styled-component o variables globales.
