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
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapse" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link className="navbar-brand" to="/">LibeRain</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <form className="navbar-form navbar-left">
              <input type="text" className="form-control" placeholder="Search Liberain"/>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Memo Book <span className="caret"/></Link>
                <ul className="dropdown-menu">
                  <li role="separator" className="divider"/>
                  <li><Link to="/book_create">Create</Link></li>
                </ul>
              </li>
              { this.data.user ?
                <li><Link to="#" onClick={this.signout}>Sign Out</Link></li> :
                <li><Link to="/signin">Sign In</Link></li>
              }
              { this.data.user ? "" :
                <li><Link to="/signup">Sign Up</Link></li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});