const Link = ReactRouter.Link;

AccSignUp = React.createClass({
  getInitialState() {
    return {
      errors: {}
    };
  },
  onSubmitEvent(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const passConfirm = event.target.passConfirm.value;
    const displayName = event.target.displayName.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! displayName) {
      errors.displayName = 'Display Name required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (passConfirm !== password) {
      errors.passConfirm = 'Password mismatched';
    }

    if (_.isEmpty(errors)) {
      Accounts.createUser({
        email: email,
        password: password,
        displayName: displayName
      }, error => {
        if (error) {
          this.setState({
            errors: {'none': error.reason}
          });
          return;
        }

        this.props.history.pushState(null, '/');
      })
    }
    else{
      this.setState({ errors });
    }
  },

  render() {
    return(
      <div className="container">
        <div style={({marginTop:'50px'})} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign Up</div>
            </div>

            <div style={({paddingTop:'30px'})} className="panel-body">
              <FormErrors errors={this.state.errors} />

              <form className="form-horizontal" onSubmit={ this.onSubmitEvent }>
                <AccFormInput
                  hasError={!!this.state.errors.email}
                  type="email"
                  name="email"
                  label="Your Email"
                  iconClass="glyphicon glyphicon-user"
                />

                <AccFormInput
                  hasError={!!this.state.errors.displayName}
                  type="text"
                  name="displayName"
                  label="Display Name"
                  iconClass="glyphicon glyphicon-user"
                />

                <AccFormInput
                  hasError={!!this.state.errors.password}
                  type="password"
                  name="password"
                  label="Password"
                  iconClass="glyphicon glyphicon-lock"
                />

                <AccFormInput
                  hasError={!!this.state.errors.passConfirm}
                  type="password"
                  name="passConfirm"
                  label="Confirm Password"
                  iconClass="glyphicon glyphicon-lock"
                />

                <div style={({marginTop:"10px"})} className="form-group">
                  <div className="col-md-offset-2 col-md-8">
                    <button type="submit" className="btn btn-info btn-lg btn-block">Join</button>
                  </div>
                </div>
              </form>

              <div className="form-group">
                <div className="col-md-12 control">
                  <div style={({borderTop: "1px solid#888", paddingTop:"15px", fontSize:"85%"})}>
                    Have an account? <Link to="/signin">Sign In.</Link>
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