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

var ToDoList = React.createClass({ loadItemsFromServer: function() {
$.ajax({
url: this.props.url, dataType: 'json',
cache: false,
success: function(data) {
this.setState({data: data}); }.bind(this),
error: function(xhr, status, err) {
console.error(this.props.url, status, err.toString()); }.bind(this)
}); },
handleItemSubmit: function(item) { var items = this.state.data;
item.id = Date.now();
var newItems = items.concat([item]); this.setState({data: newItems}); $.ajax({
url: this.props.url, dataType: 'json',
type: 'POST',
data: item,
success: function(data) {
this.setState({data: data}); }.bind(this),
error: function(xhr, status, err) {
this.setState({data: items});
console.error(this.props.url, status, err.toString()); }.bind(this)
}); },
getInitialState: function() { return {data: []};
},
componentDidMount: function() {
this.loadItemsFromServer();
setInterval(this.loadItemsFromServer, this.props.pollInterval); },
render: function() { return (
<div className="ToDoList">
<h1>ToDo</h1>
<ToDoList data={this.state.data} /> <InputBoxonItemSubmit={this.handleItemSubmit} />
</div> );
} });
￼var InputBox = React.createClass({ getInitialState: function() {
return {author: '', text: ''}; },
handleAuthorChange: function(e) { this.setState({author: e.target.value});
},
handleTextChange: function(e) {
this.setState({text: e.target.value}); },
handleSubmit: function(e) { e.preventDefault();
var author = this.state.author.trim(); var text = this.state.text.trim();
if (!text || !author) {
return; }
this.props.onItemSubmit({author: author, text: text});
this.setState({author: '', text: ''}); },
render: function() { return (
<form className="itemInput" onSubmit={this.handleSubmit}> <input
type="text"
placeholder="Job to do" value={this.state.author} onChange={this.handleAuthorChange}
/> <input
type="text"
placeholder="Things tooo do!" value={this.state.text} onChange={this.handleTextChange}
/>
<input type="submit" value="Post" /> </form>
); }
});
var ItemList = React.createClass({
render: function() {
var itemNodes = this.props.data.map(function(item) {
return (
<item author={item.author} key={item.id}>
{item.text} </Item>
); });
return (
<div className="itemList">
{itemNodes} </div>
); }
!
!
!
! !] });
var data = [
! {id:1, author(category?) "!
! {id:2, author "!
! {id:3, author "!
", text:"item"} ", text:"item"}
", text:"item"}
