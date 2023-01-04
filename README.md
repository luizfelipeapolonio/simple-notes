# Aplicativo de Notas

Aplicativo de notas simples com dados persistentes e layout responsivo, utilizando a biblioteca React JS. Para armazenar os dados, foi utilizado a biblioteca json server, simulando uma REST API.

<img src="./gif/simple_notesGIF.gif" width="800px" alt="Gif demonstração do projeto" />

## 💻 Tecnologias utilizadas
As seguintes ferramentas foram utilizadas na construção do projeto:
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ReactJS](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [json-server](https://github.com/typicode/json-server)
- [Create React App](https://github.com/facebook/create-react-app)

## 🛠 Pré-requisitos
* Ter instalado o [Git](https://git-scm.com/) e o [NodeJs](https://nodejs.org/en/).

## ⚙ Como rodar a aplicação
Com o auxílio de um terminal, precisamos rodar alguns comandos para executar o projeto:
* Primeiro, clone este repositório:
```bash
$ git clone https://github.com/luizfelipeapolonio/simple-notes
```
* Acesse a pasta da aplicação:
```bash
$ cd simple-notes
```
* Instale as dependências:
```bash
 $ npm install
```

### Back-end
O back-end da aplicação se encontra no arquivo `db.json`. Para simular uma REST API e subir este arquivo como se fosse um servidor back-end real, usamos o comando:
```bash
$ npm run backend
```
> Este script `backend` está configurado no arquivo `package.json`

<br />

O back-end da aplicação irá rodar na porta:5000. Para visualizar o server rodando no navegador, acesse http://localhost:5000/notes
> O arquivo `db.json` deve ter dados previamente criados, conforme mostrado na documentação do [json-server](https://github.com/typicode/json-server#getting-started)

### Front-end
Com o back-end já rodando, podemos iniciar o front-end da aplicação usando o comando:
```bash
$ npm start
```
A aplicação irá abrir automaticamente no seu navegador na porta:3000, caso não abra, acesse http://localhost:3000

## 📝 Licença
Este repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido neste repositório.

## Autor
Feito com 💜 por luizfelipeapolonio

