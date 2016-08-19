var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');
var browser = require('browser');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      Edit below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////
var ItemRow = React.createClass ( {
	render: function (){
		var name = this.props.item.text
		 this.rops.item.text:
		 <span style = {{color:'purple'}}
	{this.props.item.text}
	/span>;
	return(
	  <tr
	    <td {this.props.item.text}/td>
	  /tr>
     );
	} 
});

var ItemTable = React.createClass ({
	render: function(){
		var rows = [];
		var lastCategory = null;
		this.props.items.forEach(function(item){
			if(item.category ! == lastCategory){
				rowspush(<ItemRow item={item} key{item.name}/>);
						 lastCategory=item.category;
		});
	return(
	  <table>
		<tbody>{rows}</tbody>
	  </table>
	);
	}
});
		
var item-INPUT = React.createClass({ 
	render:function(){
	  return(<form>
			<p> {''} ToDo Item: </p>
			<input type = "text" placeholder = "Job Item" />
			<p>{''} Category: </p>
			 <input type = "select" >{this.state.options} />
			 <input type = "button" {this.state.submit} />
			 </form>
			);
	}
});
		
var categorySelect = React.createClass({
	render:function(){
	  return(
	  
	  )}
});
	 
var item-Submit = React.createClass({
	render:function(){
		return
	}
});
		
var FilterableItemTable = React.createClass({
	render:function(){
		return(
		 <div>
			<InputTable />
			<ItemTable items={this.props.items} />
		</div>	
		
		);
	}
});
}
});
		
var ITEMS = [
	{category:'urgent-ITM', item:'text', value:'1'},
	{category:'regular-ITM', item:'text', value:'2'},
	{category:'long-term-ITM', item:'text', value:'3'}
]

ReactDOM.render(
  <FilterableItemTable items = {ITEMS}/>
	document.getElementById('container')
);