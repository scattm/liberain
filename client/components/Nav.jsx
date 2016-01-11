const Link = ReactRouter.Link;

Nav = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    var user = Meteor.user();
    return {
      user: user
    }
  },

  signout: function(event) {
    event.preventDefault()
    Meteor.logout()
  },

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">LibeRain</Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              { this.data.user ?
                <li><Link to="#" onClick={this.signout}>Sign Out</Link></li> :
                <li>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});