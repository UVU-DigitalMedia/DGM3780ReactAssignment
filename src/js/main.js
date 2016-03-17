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
    {id: 1, name: "todo 1", catagory: "regular"},
    {id: 2, name: "todo 2", catagory: "urgent"},
    {id: 3, name: "todo 3", catagory: "regular"},
    {id: 4, name: "todo 4", catagory: "longTerm"},
];

var TodoList = React.createClass({
    render: function (){
        return (
            <div className="categoryList">

               <TodoInput />
         
               <TodoItems items={this.props.items} />
                
            </div> 
        )
    }
})

var TodoInput = React.createClass({
    render: function () {
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
        
        var rows = [];
        
        this.props.items.forEach(function(item) {
            rows.push(<TodoItem key={item.id} item={item} />)
        })
        
        return (
            <ul>
                {rows}
                </ul>
        )
    }
})

var TodoItem = React.createClass({
    render: function () {
        return (
            <li>
              <input type="checkbox" />
              <span className="urgent-ITM">{this.props.item.name}</span>
            </li> 
        )
    }
})

ReactDOM.render(
  <TodoList  items={items} />,
  document.getElementById('content')
);
