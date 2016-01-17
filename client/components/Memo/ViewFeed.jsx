MemoViewFeed = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="container">View as feed {this.props.id}</div>
    )
  }
});