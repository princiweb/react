/** @jsx React.DOM */

React.render(
  <h3> Componente básico com JSX</h3>,
  document.getElementById('jsx-component')
);

React.render(
  React.DOM.h3(null, 'Component básico sem JSX'),
  document.getElementById('sem-jsx')
);

var MyComponent = React.createClass({
  render: function(){
    return (
       <h3>Componente customizado</h3>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('custom-componente')
);

var MyComponentProps = React.createClass({
  render: function(){
    return (
       <h3>E aí {this.props.name}</h3>
    );
  }
});

React.render(
  <MyComponentProps name="Princi web" />,
  document.getElementById('custom-props')
);

var DefaulState = React.createClass({
  getInitialState: function(){
    return {
      name: "Victor",
      count: 1
    }
  },
  mudarNome: function(){
    this.setState({ name: "Rodolfo"});
  },
  incrementarCount: function(){
    this.setState({ count: this.state.count + 1});
  },
  decrementarCount: function(){
    this.setState({ count: this.state.count - 1});
  },
  render: function(){
    return (
      <div>
       <h3>E aí {this.state.name} | {this.state.count}</h3>
       <button className="button alert" onClick={this.mudarNome} >Trocar nome!</button>
       <button className="button alert" onClick={this.incrementarCount} >Incrementar</button>
       <button className="button alert" onClick={this.decrementarCount} >Decrementar</button>
      </div>
    );
  }
});

React.render(
  <DefaulState />,
  document.getElementById('custom-default')
);