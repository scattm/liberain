MemoViewTimeLine = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="container">View as time line {this.props.id}</div>
    )
  }
});