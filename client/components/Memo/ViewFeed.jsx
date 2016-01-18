MemoViewFeed = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="col-sm-9 col-md-10 main">View as feed {this.props.id}</div>
    )
  }
});