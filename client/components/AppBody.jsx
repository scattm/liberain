AppBody = React.createClass({
  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});