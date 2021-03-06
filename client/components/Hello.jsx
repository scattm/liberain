Hello = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    var user = Meteor.user();
    return {
      user: user
    }
  },

  render() {
    return(
      <div className="container">
        {this.data.user ?
          <h1>Welcome, {this.data.user.profile.displayName}</h1> :
          <h1>Homepage is being implemented</h1>
        }
      </div>
    )
  }
});