var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {items: [], newItemName: ''};
  },
  handleNewItemChange: function(e) {
    this.setState({newItemName: e.target.value});
  },
  handleNewItemSubmit: function(e) {
    e.preventDefault();
    var newItemName = this.state.newItemName;
    var items = this.state.items;
    items.push(newItemName);
    this.setState({items: items, newItemName: ''});
  },
  render: function() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleNewItemSubmit}>
          <input onChange={this.handleNewItemChange} value={this.state.newItemName} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </section>
    );
  }
});

module.exports = ListManager;
