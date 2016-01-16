const Link = ReactRouter.Link;

Nav = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    var user = Meteor.user();
    Meteor.subscribe("memoBooks");

    var memoList = MemoBooks.find().fetch();

    return {
      user: user,
      memoList: memoList
    }
  },

  signOut: function(event) {
    event.preventDefault()
    Meteor.logout()
  },

  render() {
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
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
                  { this.data.memoList.length > 0 ?
                    _.values(this.data.memoList).map(function (memoBook) {
                      return (
                        <li key={memoBook._id}>
                          <Link to={"/book/" + memoBook._id}>{memoBook.name}</Link>
                        </li>
                      );
                    }) : ''
                  }
                  <li role="separator" className="divider"/>
                  <li><Link to="/book/create">Create</Link></li>
                </ul>
              </li>
              { this.data.user ?
                <li><Link to="#" onClick={this.signOut}>Sign Out</Link></li> :
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