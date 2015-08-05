/** @jsx React.DOM */

// var data = [
//   {author: 'Gabriel', description: 'Oi Gabriel'},
//   {author: 'Rodolfo', description: 'Oi Rodolfo'},
//   {author: 'Victor', description: 'Eaí Victor'}
// ];

var CommentBox = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  loadComments: function(){
    $.ajax({
      url: 'http://localhost:3000/comments',
      dataType: 'json',
      cache: false,
      success: function(data) {
        
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },
  commentSubmit: function(comment){
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    $.ajax({
      url: 'http://localhost:3000/comments',
      dataType: 'json',
      type: 'POST',
      data: comment,
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadComments();

    setInterval(this.loadComments, this.props.interval);
  },
  render: function(){
    return(
      <div className="comment-box">
        <h1>Comentários</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.commentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    
      var commentNodes = this.props.data.map(function (comment){
        return (
          <Comment author={comment.author} >
            {comment.description}
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

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var description = React.findDOMNode(this.refs.text).value.trim();
    if (!description || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, description: description});
    
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Nome" ref="author" />
        <textarea placeholder="Comentario" ref="text"></textarea>
        <input className="button expand" type="submit" value="COMENTAR" />
      </form>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
     <div className="panel callout">
      <h2 className="comment-author">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

React.render(
  <CommentBox interval="4000" />,
  document.getElementById('content')
);