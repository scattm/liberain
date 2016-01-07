const Link = ReactRouter.Link;

Nav = React.createClass({
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">LibeRain</Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/message">Liber Massage</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});