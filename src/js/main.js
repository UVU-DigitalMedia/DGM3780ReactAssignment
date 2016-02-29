var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      Edit below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////

var list = [{ key: 0, task:'Finish Time Machine', category: 'regular' }, { key: 1, task: 'Realign Spectral Anamoly Cannon', category: 'regular' }, { key: 2, task: 'Explain Dark Matter to Steven Hawking', category: 'urgent' }, { key: 3, task: 'Do the dishes', category: 'long-term' }];
    
var TodoList = React.createClass({

  getInitialState: function () {
  
    return { changed: false };
  
  },

  render: function() {
    return (
    <div className="categoryList">
        <TodoInput list={this.props.list}/>
        <TodoItems list={this.props.list}/>
    </div>
    );
  }
});    
    
var TodoInput = React.createClass({

  handleClick: function(e) {
    
        e.preventDefault();
        
        list.push({key: list.length, task: $('#item-INPUT').val(), category: $('#categorySelect').val() });
        
        console.log(list);
        
        ReactDOM.render(
            <TodoList list={list}/>,
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
            
            <button onClick={this.handleClick} type="button" id="item-SUBMIT" class="btn btn-sm btn-default">Submit</button>
        </div>       
    );
  }
});    

var TodoItems = React.createClass({
  render: function() {
  
  var items = this.props.list.map(function(item) {
      return (
        <TodoItem thingToDo={item.task} category={item.category} key={item.key} />
      );
    });
    return (
        <ul>
            {items}
        </ul>
    );
  }
});  
    
var TodoItem = React.createClass({
  render: function() {
    return (
        <li className={this.props.category + '-ITM'}>{this.props.thingToDo} <strong><em>{this.props.category}</em></strong></li>
    );
  }
});     
    
ReactDOM.render(
  <TodoList list={list}/>,
  document.getElementById('content')
);