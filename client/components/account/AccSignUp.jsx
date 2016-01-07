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
    const password = event.target.email.value;
    const passconfirm = event.target.email.value;

    const errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (! passconfirm !== password) {
      errors.passconfirm = 'Password mismatched';
    }

    if (! _.isEmpty(errors)) {
      return;
    }

    Accounts.createUser({
      email: email,
      password: password
    }, error => {
      if (error) {
        this.setState({
          errors: { 'none': error.reason }
        });

        return;
      }

      this.props.history.pushState(null, '/');
    })
  },

  render() {
    return(
      <div className="container">
        <div style={({marginTop:'50px'})} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign Up</div>
            </div>

            <div style={({paddingTop:'30px'})} className="panel-body" onsubmit={ this.onSubmitEvent }>
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

              <AccFormInput
                hasError={!!this.state.errors.passconfirm}
                type="password"
                name="passconfirm"
                label="Confirm Password"
                iconClass="glyphicon glyphicon-lock"
              />

              <div style={({marginTop:"10px", marginBottom:"85px"})} className="form-group">
                <div className="col-md-offset-2 col-md-8">
                    <button type="submit" className="btn btn-info btn-lg btn-block">Join</button>
                </div>
              </div>

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