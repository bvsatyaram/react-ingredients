var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {
    function itemContent(item, index) {
      return (
        <ListItem key={item + index} name={item} />
      );
    };
    return (
      <ul>{this.props.items.map(itemContent)}</ul>
    );
  }
});

module.exports = List;
