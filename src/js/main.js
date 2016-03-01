var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      Edit below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////

var ToDoList = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentBox.
        <TodoItems data={this.props.data} />
        <ToDoInput />
      </div>
    );
  }
});

var ToDoInput = React.createClass({
  render: function(){
    return(
      <div>
        <label for="item-INPUT">TODO Item:</label>
        <input type="text" id="item-INPUT" />

        <label for="categorySelect">Category:</label>
        <select name="categorySelect" id="categorySelect">
          <option value="urgent">test</option>
          <option value="urgent">Urgent</option>
          <option value="urgent">Long Term</option>
        </select>

        <button type="button" id="item-SUBMIT" class="btn btn-sm btn-default">Submit</button>
      </div>
    );
  }
});

var TodoItem = React.createClass({
  render: function() {
    return (
      <div>
        <p>{this.props.author}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

var TodoItems = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <TodoItem author={comment.author} text={comment.text} />
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

//        <ToDoItems />
/*
var ToDoItems = React.createClass({
  render: function(){
    var bullets = [];
    this.props.items.forEach(function(item){
      bullets.push(<TodoItem item={item.name} />);
    });
    return(
      <div>
       <ul>
       test
//        {bullets}
       </ul>
      </div>
    );
  }
});
*/

ReactDOM.render(
  <ToDoList data={data} />,
  document.getElementById('content')
);
