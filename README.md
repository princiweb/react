# React
Dojo de React na Princi Web

[React](https://facebook.github.io/react/) é uma biblioteca de interface do usuário, desenvolvida no facebook para facilitar a criação de componentes de UI interativos, reusáveis e com monitoração de estados. Ele é usado no facebook em produção, e o instagram.com é escrito inteiramente com React.

Um de seus principais argumentos, é de que ele não somente performa no client side, mas também pode ser renderizado via server side, e eles podem trabalhar juntos de forma interoperável.

O React também usa um conceito chamado virtual DOM, que seletivamente renderiza sub árvores de nós baseado em mudanças de estado. Ele realiza a menor quatidade possível de manipulação no DOM, a fim de manter seus estados atualizados.

Aqui na **Princi Web** brincamos um pouco com esta biblioteca, e eis aqui o que saiu.

## Run

1. Execute *npm install* para instalar as dependências;
2. Crie um banco de dados em MongoDB;
3. Em *server.js*, adicione a string de conexão como argumento do método *mongoose.connect('');*
4. Execute o comando *node server*;
5. O app roda em http://localhost:3000/app