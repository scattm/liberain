FormErrors = React.createClass({
  propTypes: {
    errors: React.PropTypes.object
  },
  render() {
    if (Object.keys(this.props.errors).length == 0) {
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