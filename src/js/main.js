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

￼var InputBox = React.createClass({ getInitialState: function() {
return {author: '', text: ''}; },

handleTextChange: function(e) {
this.setState({text: e.target.value}); },
handleSubmit: function(e) { e.preventDefault();
var author = this.state.author.trim(); var text = this.state.text.trim();
if (!text || !author) {
return; }
this.props.onItemSubmit({author: author, text: text});
this.setState({author: '', text: ''}); },
render: function() { return (

	
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
