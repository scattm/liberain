AppBody = React.createClass({
  render() {
    return(
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
});