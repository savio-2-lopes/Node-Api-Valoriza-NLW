<h1 align="center">NLW Valoriza</h1>

<p align="center">	
   <a href="https://www.linkedin.com/in/savio-lopes/">
      <img alt="Savio Lopes" src="https://img.shields.io/badge/Savio Lopes-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/savio-2-lopes/NLW-Valoriza?color=774DD6">
  <a href="https://github.com/savio-2-lopes/NLW-Valoriza/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/savio-2-lopes/NLW-Valoriza?color=774DD6">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  <a href="https://github.com/savio-2-lopes/NLW-Valoriza/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/savio-2-lopes/NLW-Valoriza?color=8257E5&logo=github">
  </a>
</p>

> :rocket: Sobre o projeto
**Valoriza** é um plataforma para promover o reconhecimento entre companheiros de equipe, desenvolvido durante a 
maratona NLW/Together, disponibilizada pela @Rocketseat.

# :pushpin: Conteúdo

* [Tecnologias](#computer-technologies)
* [Features](#rocket-features)
* [Como Executar](#construction_worker-how-to-run)
* [Encontrou um bug?](#bug-issues)
* [Licença](#closed_book-license)

# :computer: Tecnologias 
Este projeto foi feito usando as seguintes tecnologias:

* [NodeJS](https://nodejs.org/en/)      
* [Express](https://expressjs.com/)   
* [Typescript](https://www.typescriptlang.org/)
* [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)   

# 📦 Funcionalidades
- Cadastro de usuário
    [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail    
    [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
    [ x ] Não é permitido cadastrar Tag sem nome
    [ x ] Não é permitido cadastrar mais de uma Tag com o mesmo nome    
    [ x ] Não é permitido cadastrar por usuários que não sejam administrador

- Cadastro de elogios
    [ x ] Não é permitido um usuário cadastrar um elogio pra si
    [ x ] Não é permiti cadastrar elogios para usuáios invalidos
    [ x ] O susário precisa está logado na alicação

### :construction_worker: Rodando a Aplicação

```bash
# Clone a aplicação
$ git clone https://github.com/savio-2-lopes/NLW-Valoriza.git

# Vá até a pasta da aplicação
$ cd NLW-Valoriza

# Instale as Dependências
$ yarn

# Execute as Migrations para criar as tabelas do banco de dados
$ yarn typeorm migration:run

# Execute a Aplicação
$ yarn run dev
```

# :bug: Issues
Sinta-se à vontade para **registrar um nova issue** no repositório [NLW Valoriza](https://github.com/savio-2-lopes/NLW-Valoriza/issues).

# :closed_book: License
---
Released in 2022 :closed_book: License
Este projeto está sob a licença [MIT](./LICENSE).
---

Desenvolvido com 💜 por [Savio Lopes](https://github.com/savio-2-lopes), durante a trilha Node.js da NLW Together, ministrada por [danileao](https://github.com/danileao) Especialista da [Rocketseat](https://github.com/rocketseat-education) 🚀.