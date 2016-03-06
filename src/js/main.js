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
    
  getInitialState: function() {
      
      return {list : this.props.list}
  },
    
  handleClick: function() {
        
    this.state.list.push({key: list.length, task: document.getElementById('item-INPUT').value, category: document.getElementById('categorySelect').value });
    this.setState(this.state);
      
  },
    
  render: function() {
   
    return (
        <div className="categoryList">
            <TodoInput click={this.handleClick}/>
            <TodoItems list={this.state.list}/>
        </div>
    );
  }
});

var TodoInput = React.createClass({
        
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
            
            <button onClick={this.props.click} type="button" id="item-SUBMIT" class="btn btn-sm btn-default">Submit</button>
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
        <li className={this.props.category + '-ITM'}><input type="checkbox" /> {this.props.thingToDo} <strong><em>{this.props.category}</em></strong></li>
        );
  }
});     
    
ReactDOM.render(
  <TodoList list={list}/>,
  document.getElementById('content')
);