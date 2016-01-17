MemoView = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState: function () {
    return {
      memoView: 'feed'
    };
  },

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

  setViewFeed: function (event) {
    event.preventDefault();
    this.setState(
      {memoView: 'feed'}
    )
  },

  setViewTimeLine: function (event) {
    event.preventDefault();
    this.setState(
      {memoView: 'timeline'}
    )
  },

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
                <li className={this.state.memoView == 'feed' ? 'active' : ''}>
                  <a href="#" onClick={this.setViewFeed}>Feed</a>
                </li>
                <li className={this.state.memoView == 'timeline' ? 'active' : ''}>
                  <a href="#" onClick={this.setViewTimeLine}>Time line</a>
                </li>
              </ul>
            </div>
            {this.data.isReady ?
              <div className="col-sm-9 col-md-10 main">
                {this.state.memoView == 'feed' ?
                  <MemoViewFeed id={this.data.memoBook._id}/> :
                  <MemoViewTimeLine id={this.data.memoBook._id}/>
                }
              </div>:
              <div className="spinners text-center">
                <div className="spinner spinner-bounce-bottom"></div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
});