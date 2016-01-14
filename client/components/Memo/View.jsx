MemoView = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    Meteor.subscribe("memoBooks");
    var memoBook = MemoBooks.findOne({_id: this.props.params.id});

    return {
      isAuthenticate: Meteor.userId() !== null,
      memoBook: memoBook
    }
  },

  componentWillMount: function() {
    if (! this.data.isAuthenticate) {
      this.props.history.pushState(null, `/signin`)
    }
  },

  render: function() {
    return (
      <div className="container text-left col-lg-10 col-lg-offset-1 col-sm-10 col-sm-offset-1">
        <h1>{this.data.memoBook.name}</h1>
        <p>{this.data.memoBook.description}</p>
      </div>
    )
  }
});