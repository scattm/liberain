AccErrors = React.createClass({
  propTypes: {
    errors: React.PropTypes.object
  },
  render() {
    if (isNaN(this.props.errors)) {
      return <span />
    } else {
      return (
        <div className="alert alert-danger col-sm-12">
          {
            _.values(this.props.errors).map(function (errorMessage) {
              return <div key={errorMessage} className="list-item">
                {errorMessage}
              </div>;
            })
          }
        </div>
      );
    }
  }
});