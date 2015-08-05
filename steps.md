# Steps

- CommentBox
  - CommentList
    - Comment

  - CommentForm

// Criar um de cada e renderizar


var CommentBox = React.createClass({
    render: function(){
      return(
        <div className="comment-box">
          <h1>Comentários</h1>
          <CommentList />
          <CommentForm />
        </div>
      );
    }
  });

  var CommentList = React.createClass({
    render: function() {
      return (
        <div className="comment-list">
          Lista de comentários
        </div>
      );
    }
  });

  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="comment-form">
          Formulário
        </div>
      );
    }
  });

  React.render(
    <CommentBox />,
    document.getElementById('content')
  );


// Criar component de comentario

var Comment = React.createClass({
    render: function() {
      return (
        <div className="comment">
        <h2 className="comment-author">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  });


// Adicionar comentários no CommentList

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Gabriel">Oi Gabriel</Comment>
        <Comment author="Rodolfo">Oi Rodolfo</Comment>
        <Comment author="Victor">Oi Victor</Comment>
      </div>
    );
  }
});

Criar array de comentarios como exemplo

var data = [
  {author: "Gabriel", description: "Um comentário"},
  {author: "Fulano", description: "outro comentário"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);

// Agora renderizamos os comentarios dinamicamente

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


// Props sao imutaveis
// Para implementar interações, precisamos inserir states mutaveis no componente

var CommentBox = React.createClass({
    getInitialState: function(){
      return {data: []};
    },
    render: function(){
      return(
        <div className="comment-box">
          <h1>Comentários</h1>
          <CommentList data={this.state.data}/>
          <CommentForm />
        </div>
      );
    }
  });

// Agora fazemos a requição ajax para a api
// CommentBox

componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

// Inserir o ajax na funcao loadCommentsFromServer do commentBox

loadCommentsFromServer

// E chamar com set interval no componentDidMount

this.loadCommentsFromServer();
setInterval(this.loadCommentsFromServer, this.props.pollInterval);


// Finalmente chegou a hora do form para inserir novos comentários

var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="comment-form">
        <input type="text" placeholder="Nome" />
        <textarea placeholder="Comentario"></textarea>
        <input type="submit" value="Comentar" />
      </form>
    );
  }
});

// Adicionando interatividade ao form

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    
    // Usamos this.refs para referenciar o component
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Nome" ref="author" />
          <textarea placeholder="Comentario" ref="text"></textarea>
          <input type="submit" value="Comentar" />
        </form>
    );
  }
});

// CommentBox

handleCommentSubmit: function(comment) {
    // TODO: submit to the server and refresh the list
  },

// CommentBox Render

<CommentForm onCommentSubmit={this.handleCommentSubmit} />

// Chamar o callback no CommentForm

 this.props.onCommentSubmit({author: author, text: text});

// Agora enviar para o server
// CommentBox handleCommentSubmit

$.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

// Para ser mais dinamico podemos inserir o comentario na hora
// Sem ter q esperar o request do ajax

// CommentBox handleCommentSubmit

var comments = this.state.data;
var newComments = comments.concat([comment]);
this.setState({data: newComments});