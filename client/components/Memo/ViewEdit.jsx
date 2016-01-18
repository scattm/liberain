MemoViewEdit = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },

  onSubmitEvent(event) {
    event.preventDefault();
  },

  render: function() {
    return (
      <div className="col-sm-9 col-md-10 main">
        <form className="form-horizontal" style={({paddingTop: "20px"})}
              onSubmit={ this.onSubmitEvent } >
          <fieldset>
            <legend style={({marginBottom: "40px"})}>Laugh more, Love more</legend>
          </fieldset>
        </form>
      </div>
    )
  }
});