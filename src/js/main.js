var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      Edit below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////

var items = [
    {id: 1,
    name: 'Item One',
    complete: false},
    {id: 2,
    name: 'Item One',
    complete: false},
    {id: 3,
    name: 'Item One',
    complete: false},
    {id: 4,
    name: 'Item One',
    complete: false},
    
]

// tutorial1.js
var ToDoList = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <ToDoInput />
        <ToDoItems items={this.props.items}/>
        
      </div>
    );
  }
});

var ToDoInput = React.createClass({
  render: function() {
    return (
      <div>
       <label htmlFor="item-INPUT">TODO Item:</label>
        <input type="text" id="item-INPUT" />

        <label htmlFor="categorySelect">Category:</label>
        <select name="categorySelect" id="categorySelect">
          <option value="urgent">Regular</option>
          <option value="urgent">Urgent</option>
          <option value="urgent">Long Term</option>
        </select>

        <button type="button" id="item-SUBMIT" className="btn btn-sm btn-default">Submit</button>
      </div>
    )
  }
});
 
var ToDoItems = React.createClass({
    render: function() {
        var bullets = [];
        this.props.items.forEach(function(item) {
            bullets.push(<ToDoItem itemName={item.name} key={item.id} />)
      });
      return (
          <ul>
          {bullets}
          </ul>
      )
    }
}); 
 
var ToDoItem = React.createClass({
    render: function() {
          return (
          <li>
            <span className="long-term-ITM">{this.props.itemName}</span>
          </li>
       
        );
    }
});

ReactDOM.render(
  <ToDoList items={items}/>,
  document.getElementById('content')
);