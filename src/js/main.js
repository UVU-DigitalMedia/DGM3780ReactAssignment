var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      Edit below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////

var taskList = [];

var ToDoList = React.createClass({
  render: function() {
    return (
      <div>
        <ToDoInput />
        <TodoItems taskList={this.props.taskList} />
      </div>
    );
  }
  
});

var ToDoInput = React.createClass({
  add: function(){
    //adding input to data array
    taskList.push({key: taskList.length, name: $('#item-INPUT').val(), category: $('#categorySelect').val() });
    console.log(taskList);
    //update data
    ReactDOM.render(
      <ToDoList taskList={taskList} />,
      document.getElementById('content')
    );
  },
  render: function(){
    return(
      <div>
        <label for="item-INPUT">TODO Item:</label>
        <input type="text" id="item-INPUT" />

        <label for="categorySelect">Category:</label>
        <select name="categorySelect" id="categorySelect">
          <option value="regular">Regular</option>
          <option value="urgent">Urgent</option>
          <option value="long-term">Long Term</option>
        </select>

        <button type="button" id="item-SUBMIT" class="btn btn-sm btn-default" onClick={this.add}>Submit</button>
      </div>
    );
  }
});

var Task = React.createClass({
  render: function() {
    return (
      <li class="long-term-ITM">
        <span class="long-term-ITM"><input type="checkbox" checked={this.props.complete}/></span>
        <span class="long-term-ITM">{this.props.name}</span>
      </li>
    );
  }
});

var TodoItems = React.createClass({
  render: function() {
    var items = this.props.taskList.map(function(task) {
      return (
        <Task key={task.key} name={task.name} category={task.category} complete={task.complete}/>
      );
    });
    return (
      <ul className="commentList">
        {items}
      </ul>
    );
  }
});

ReactDOM.render(
  <ToDoList taskList={taskList} />,
  document.getElementById('content')
);
