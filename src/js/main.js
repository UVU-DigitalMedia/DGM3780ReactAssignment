var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var React = require('react');
var ReactDOM = require('react-dom');

var list = [];

var ToDoList = React.createClass({

  render: function() {
    return (
    <div className="categoryList">
        <ToDoInput list={this.props.list}/>
        <ToDoItems list={this.props.list}/>
    </div>
    );
  }
});

var ToDoInput = React.createClass({
  addItem: function() {
        list.push({key: list.length, task: $('#item-INPUT').val(), category: $('#categorySelect').val() });
        ReactDOM.render(
            <ToDoList list={list}/>,
            document.getElementById('content')
        );
  },

  render: function() {
    return (
        <div className="newToDoForm">
            <label for="item-INPUT">TODO Item:</label>
            <input type="text" id="item-INPUT" />
            <label for="categorySelect">Category:</label>
            <select name="categorySelect" id="categorySelect">
                <option value="regular">Regular</option>
                <option value="urgent">Urgent</option>
                <option value="long-term">Long Term</option>
            </select>
            <button onClick={this.addItem} type="button" id="item-SUBMIT">Submit</button>
        </div>
    );
  }
});

var ToDoItems = React.createClass({
  render: function() {
    var items = this.props.list.map(function(item) {
      return (
        <ToDoItem task={item.task} category={item.category} key={item.key} />
      );
    });
    return (
        <ul>
            {items}
        </ul>
    );
  }
});

var ToDoItem = React.createClass({
  render: function() {
    return (
        <li className={this.props.category + '-ITM'}>{this.props.task}</li>
    );
  }
});

ReactDOM.render(
  <ToDoList list={list}/>,
  document.getElementById('content')
);
