MemoView = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    var ret = {
      isAuthenticate: Meteor.userId() !== null
    };

    var mSubs = Meteor.subscribe("memoBooks");
    if (mSubs.ready()) {
      ret.memoBook = MemoBooks.findOne({_id: this.props.params.id});
      ret.isReady = true;
    }
    else {
      ret.isReady = false;
    }


    return ret;
  },

  componentWillMount: function () {
    if (!this.data.isAuthenticate) {
      this.props.history.pushState(null, `/signin`)
    }
  }
  ,

  render: function () {
    return (
      <div className="row">
        <div className="jumbotron m-sm-0 border_bottom_blue">
          { this.data.isReady ?
            <div className="container">
              <h1>{this.data.memoBook.name}</h1>
              <p>{this.data.memoBook.description}</p>
            </div> :
            <div className="spinners text-center">
              <div className="spinner spinner-bounce-bottom"></div>
            </div>
          }
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Export</a></li>
              </ul>
            </div>
            <div className="col-sm-9 col-md-10 main">
              dsadsadasdasdsasdasdasdasdasdas
            </div>
          </div>
        </div>
      </div>
    )
  }
});