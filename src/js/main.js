var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      EDIT below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////

var myItems = [
    {id: 1, name: "ToDo 1", category: "regular"},
    {id: 2, name: "ToDo 2", category: "regular"},
    {id: 3, name: "ToDo 3", category: "regular"},
    {id: 4, name: "ToDo 4", category: "regular"}    
]

var TodoList = React.createClass({
    render: function() {
        return (
                 <div className="categoryList">

                <TodoInput />

                <TodoItems items ={this.props.items} />
                

              </div>
            )
    }
})

var TodoInput = React.createClass({
    render: function() {
        return (
         <div>
            <label htmlFor="item-INPUT">TODO Item:</label>
                <input type="text" id="item-INPUT" />

                <label htmlFor="categorySelect">Category:</label>
                <select name="categorySelect" id="categorySelect">
                  <option value="regular">Regular</option>
                  <option value="urgent">Urgent</option>
                  <option value="longTerm">Long Term</option>
                </select>

                <button type="button" id="item-SUBMIT" className="btn btn-sm btn-default">Submit</button>
            </div>
    )
}
})

var TodoItems = React.createClass({
    render: function () {
                //logic happens here
        var todoItemsRows = [];
        
        this.props.items.forEach(function(item) {
            console.log("here is the ITEM:")
            console.log(item);
            
            todoItemsRows.push(<TodoItem name={item.name} />)
        })
        
        return (
            <ul>
                  
            {todoItemsRows}
                  
            </ul>
        )
    }
})

var TodoItem = React.createClass({
    render: function () {

        
        return (
            <li>
                <input type="checkbox" />
                <span className="long-term-ITM">{this.props.name}</span>
            </li>
        )
    }
})

ReactDOM.render(
  <TodoList items={myItems} />,
  document.getElementById('content')
);