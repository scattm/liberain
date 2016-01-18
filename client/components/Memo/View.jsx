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

  setView: function (view) {
    this.setState(
      {memoView: view}
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
                  <a href="#" onClick={this.setView.bind(this, 'feed')}>Feed</a>
                </li>
                <li className={this.state.memoView == 'timeline' ? 'active' : ''}>
                  <a href="#" onClick={this.setView.bind(this, 'timeline')}>Time line</a>
                </li>
                <li className={this.state.memoView == 'edit' ? 'active' : ''}>
                  <a href="#" onClick={this.setView.bind(this, 'edit')}>Edit</a>
                </li>
              </ul>
            </div>
            {this.data.isReady ?
              (() => {
                switch (this.state.memoView) {
                  case "feed": return <MemoViewFeed id={this.data.memoBook._id}/>
                  case "timeline": return <MemoViewTimeLine id={this.data.memoBook._id}/>
                  case "edit": return <MemoViewEdit id={this.data.memoBook._id}/>
                  default: return <MemoViewFeed id={this.data.memoBook._id}/>
                }
              })():
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