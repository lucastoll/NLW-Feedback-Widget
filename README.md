# NLW-Feedback-Widget

<p align="center">
  <img alt="Next Level Week #8" src="https://user-images.githubusercontent.com/86172649/167728448-de7b62a5-aab9-4281-92e8-866fa0bdfc88.png" />
</p>

https://user-images.githubusercontent.com/86172649/167920194-5dfdf5f0-578c-44f0-9143-97b596c0364b.mp4

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 💻 Projeto

O projeto desenvolvido é uma aplicação para coleta de feedbacks que pode ser adicionado em qualquer ambiente mobile ou web, é um pequeno widget que contém um formulário, ao enviar os dados eles são tratados no back-end, então, um email em ambiente de testes (mailtrap) é enviado notificando o envio do feedback.

Este projeto foi desenvolvido durante a Next Level Week, apresentado pela **[Rocketseat](https://www.rocketseat.com.br)**.

## 🎯 Funcionalidades

- ✔️ Envio de feedbacks via e-mail.
- ✔️ Screenshot com html2canvas
- ✔️ Light/Dark Mode.

## 🧪 Tecnologias e Ferramentas

O maior aprendizado que este projeto trouxe para mim foi a grande quantidade de tecnologias e ferramentas novas que foram usadas, onde eu tive contato pela primeira vez.

Com isso, é importante listar todas elas e ilustrar pra que serve e qual sua funcionalidade neste projeto:

<ul>
<h2>Front-End</h2>
<h3><a href="https://vitejs.dev">Vite</a></h3>

O vite é uma ferramenta utilizada para iniciar e construir projetos front-end, de modo que ele fornece builds pre-configuradas, agilizando o inicio do processo de  desenvolvimento de um novo projeto, neste projeto o vite foi usado com a build react-ts (React + TypeScript)
  
<h3><a href="https://reactjs.org">React</a></h3>

Biblioteca JavaScript utilizada para construir a UI de aplicações web, utilizada em toda a construção deste projeto.

<h3><a href="https://www.typescriptlang.org">TypeScript</a></h3>

Linguagem de programação derivada do JavaScript, utilizada para construir projetos complexos sem nenhum empecilho, essa linguagem adiciona uma forte tipagem em todo o JavaScript, evitando erros e conflitos, ela foi utilizada no projeto principalmente com Interfaces que definem a tipagem das props recebidas nos elementos React.
  
<h3><a href="https://www.typescriptlang.org">Tailwind</a></h3>

Framework CSS onde os elementos são estilizados com classes inline no HTML, dessa maneira o css é adicionado muito mais rápido, aumentando a produtividade no desenvolvimento, ele foi utilizado em 100% da estilização do projeto, além disso, foi utilizada uma função nativa do Framework para desenvolver o Light/Dark mode, onde é adicionada a classe dark na tag HTML com um state, então o tailwind cuida do resto e os estilos são modificados automaticamente de acordo com os estilos com o prefixo dark: nos elementos html.

![image](https://user-images.githubusercontent.com/86172649/167927863-439b61ce-b2bc-4512-b8a6-1a5534f32817.png)

  
<h3><a href="https://headlessui.dev/">HeadlessUI</a></h3>
  
Biblioteca react.js usada para desenvolver componentes pre-configurados, ele foi usado no projeto para fazer o PopOver, que é o botão de feedback, de modo que ele possui toda a parte de accesibilidade (navegação via teclado) e lógica de abertura / fechamento prontas pelo headlessui.
  
<h3><a href="https://www.npmjs.com/package/html2canvas">html2canvas</a></h3>
  
Biblioteca utilizada para gerar uma imagem em formato webm a partir do seu HTML, foi utilizada para a funcionalidade de tirar screenshot da tela inteira no formulário, possibilitando o envio de um feedback visual.

<h3><a href="https://phosphoricons.com/">PhosporIcons</a></h3>

Ferramenta de icones gratuitos, utilizados em todo o site.
  
<h2>Back-End</h2>
  
<h3><a href="https://nodejs.org/en/">Node.JS</a></h3>

Ferramenta utilizada para instalação de pacotes (com o Node Package Manager) e para a execução do JavaScript no back-end, sem um browser.
  
<h3><a href="https://expressjs.com/pt-br/">Express</a></h3>

Framework para o desenvolvimento de aplicações JavaScript com o Node.js, foi desenvolvido para otimizar a construção de aplicações web e APIs e foi utilizado no projeto com o mesmo propósito.
  
  
</ul>



- [Prisma](https://www.prisma.io)
- [PostgreSQL](https://www.postgresql.org)

## 🚀 Como executar

Clone o repositório e acesse a pasta.

```bash
$ git clone https://github.com/devlucascardoso/feedback-widget
$ cd nlw8
```

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ npm install

# Criar o banco de dados
$ npm prisma migrate dev

# Iniciar o projeto
$ npm run dev

# Faça uma copia do arquivo `.env.example` para `.env` e preencha com as suas credenciais
```

A aplicação pode ser acessada em [`localhost:3333`](http://localhost:3333).

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Web](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)

---

Made with 💜 by **[@l.tolotto](https://www.linkedin.com/in/lucas-fernandes-tolotto/)**.
