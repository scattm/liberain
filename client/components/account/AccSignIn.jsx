const Link = ReactRouter.Link;

AccSignIn = React.createClass({
  getInitialState() {
    return {
      errors: {}
    };
  },

  onSubmitEvent(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.email.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (_.isEmpty(errors)) {
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          this.setState({
            errors: {'none': error.reason}
          });
          return;
        }

        this.props.history.pushState(null, '/')
      });
    }
    else{
      this.setState({ errors })
    }
  },

  render() {
    return(
      <div className="container">
        <div style={({marginTop:'50px'})} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign In</div>
            </div>

            <div style={({paddingTop:'30px'})} className="panel-body">
              <AccErrors errors={this.state.errors} />

              <form className="form-horizontal" onSubmit={ this.onSubmitEvent }>
                <AccFormInput
                  hasError={!!this.state.errors.email}
                  type="email"
                  name="email"
                  label="Your Email"
                  iconClass="glyphicon glyphicon-user"
                />

                <AccFormInput
                  hasError={!!this.state.errors.password}
                  type="password"
                  name="password"
                  label="Password"
                  iconClass="glyphicon glyphicon-lock"
                />

                <div style={({marginTop:"10px"})} className="form-group">
                  <div className="col-md-offset-2 col-md-8">
                    <button type="submit" className="btn btn-info btn-lg btn-block">Sign In</button>
                  </div>
                </div>
              </form>

              <div className="form-group">
                <div className="col-md-12 control">
                  <div style={({borderTop: "1px solid#888", paddingTop:"15px", fontSize:"85%"})}>
                    Don't have an account? <Link to="/signin">Sign Up.</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});