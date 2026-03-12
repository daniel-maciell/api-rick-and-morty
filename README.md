# 🌌 Rick and Morty API - Projeto Frontend

![Rick and Morty Logo](https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty-500x281.png)

## Descrição
Interface web simples para a API de Rick and Morty, permitindo:

- Pesquisar personagens por nome  
- Ver cards com imagem, nome e status  
- Abrir detalhes completos do personagem 

## Link do projeto : https://daniel-maciell.github.io/api-rick-and-morty/



Este projeto consiste em uma interface web para consumir a API de Rick and Morty, permitindo ao usuário pesquisar personagens e visualizar suas informações principais de forma interativa. O desenvolvimento envolveu HTML, CSS e JavaScript, integrados para fornecer uma experiência simples, funcional e visualmente coerente com o tema da série.

HTML
A estrutura do projeto foi construída com HTML semântico, incluindo:
index.html: página principal com título, barra de navegação e um campo de pesquisa para localizar personagens pelo nome. O HTML contém uma seção destinada a exibir os cards dos personagens de forma dinâmica.


character.html: página de detalhes do personagem, exibindo uma imagem e informações como nome, status, espécie, gênero, origem, localização e primeira aparição.


A escolha de elementos como <section>, <header>, <h1> e <a> permite que o conteúdo seja organizado de forma lógica e acessível, além de facilitar a estilização com CSS e a manipulação com JavaScript.

CSS
O estilo do projeto foi desenvolvido para criar uma interface escura e minimalista, com cores e tipografia que remetem ao universo Rick and Morty. As principais características incluem:
Tipografia personalizada: utilização da fonte Pally-Medium para títulos e textos, com efeitos de contorno para melhorar a legibilidade sobre fundos escuros.


Fundo: imagens e cores escuras foram aplicadas para criar contraste com o conteúdo principal.


Cards de personagens: estruturados horizontalmente, com imagem à esquerda e informações à direita, bordas simples e cantos arredondados para uma apresentação limpa e organizada.


Botão de navegação: estilo simples com borda visível, permitindo voltar à página principal.


Responsividade: uso de media queries para reorganizar os cards em telas menores, mantendo legibilidade e organização.


O CSS garante que a interface seja visualmente consistente e acessível, mantendo a simplicidade sem perder a identidade visual da série.

JavaScript
O comportamento dinâmico da aplicação foi implementado com JavaScript, utilizando fetch() e promessas (then() / catch()) para consumir os dados da API de Rick and Morty. As principais funcionalidades incluem:
Pesquisa de personagens: captura o texto digitado pelo usuário e realiza uma requisição à API, retornando os personagens correspondentes.


Renderização de cards: os dados recebidos da API são transformados em elementos HTML dinâmicos, exibindo a imagem, nome e status de cada personagem.


Navegação para detalhes: cada card possui um evento de clique que redireciona para a página de detalhes do personagem selecionado.


Exibição de informações detalhadas: na página de detalhes, o JavaScript busca os dados completos do personagem e os insere em um card organizado, mantendo a mesma estética visual da página principal.


Tratamento de erros: caso a pesquisa não retorne resultados ou ocorra algum problema na requisição, mensagens informativas são exibidas para o usuário.


O uso de JavaScript garante que a aplicação seja interativa, dinâmica e responsiva, sem necessidade de recarregar a página, proporcionando uma experiência fluida ao usuário.

Conclusão
Este projeto integra HTML, CSS e JavaScript de forma harmônica para criar uma interface funcional e visualmente coerente com o universo de Rick and Morty. A combinação de elementos semânticos, estilização consistente e manipulação dinâmica de dados permite que o usuário pesquise personagens e visualize informações de maneira intuitiva, rápida e agradável, demonstrando o potencial da integração entre front-end e APIs externas.

Se você quiser, posso também criar uma versão mais resumida e objetiva, que daria para entregar como resumo de trabalho, em 1–2 parágrafos, mantendo todos os pontos importantes.
Quer que eu faça essa versão resumida também?


