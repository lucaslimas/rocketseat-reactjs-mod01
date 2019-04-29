Babel é um transcodificador de código javascript para o padrão ECMAScript antigo caso seja necessário
Webpack é um automatizador de Babel. Sempre que salvar um arquivo js ele irá executar o babel

# Na pasta do projeto

yarn init -y

Criar o arquivo `.editorconfig` para configuração do ambiente na raiz do projeto
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

Desenvolvimento
yarn add eslint babel-eslint @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli style-loader css-loader sass-loader node-sass @babel/plugin-proposal-class-properties webpack-dev-server -D

Produção
yarn add react react-dom prop-types

Iniciar o Eslint
npx eslint --init

Criar o arquivo `.babelrc` na raiz
{
"presets": ["@babel/preset-env", "@babel/preset-react"],
"plugins": ["@babel/plugin-proposal-class-properties"]
}

Criar o arquivo `webpack.config.js` na raiz
const path = require("path");
module.exports = {
entry: path.resolve(\_\_dirname, "src", "index.js"),
output: {
path: path.resolve(\_\_dirname, "public"),
filename: "bundle.js"
},
devServer: {
contentBase: path.resolve(\_\_dirname, "public")
},
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader"
}
}
]
}
}

criar a pasta `public` na raiz

Criar a pasta `src` na raiz

Criar o arquivo `index.js` na pasta `src` com o seguinte código:
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { render } from 'react-dom'

// eslint-disable-next-line no-unused-vars
class App extends Component {
render () {
return <h1>Hello World</h1>
}
}

render(<App />, document.getElementById('app'))

Criar o script para inicializar a aplicação dentro do `package.json`
"scripts": {
"dev": "webpack-dev-server --mode development"
}

Criar o arquivo `index.html` na pasta `public`

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>GoReact</title>
</head>
<body>
  <div id="app"></div>
  <script src="./bundle.js"></script>
</body>
</html>

Executar `yarn dev` e ver o resultado no navegador http://localhost:8080/
