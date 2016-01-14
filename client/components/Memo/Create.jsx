MemoCreate = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      isAuthenticate: Meteor.userId() !== null
    }
  },

  componentWillMount: function() {
    if (! this.data.isAuthenticate) {
      this.props.history.pushState(null, `/signin`)
    }
  },

  getInitialState() {
    return {
      errors: {}
    };
  },

  onSubmitEvent(event) {
    event.preventDefault();

    const memo = {};
    memo.name = event.target.name.value;
    memo.description = event.target.description.value;
    memo.shareWith = event.target.shareWith.value;

    const errors = {};

    if (! memo.name) {
      errors.name = 'Name is required for Memo Book';
    }

    if (! memo.description) {
      errors.description = 'Description is required for Memo Book';
    }

    if (_.isEmpty(errors)) {
      console.log("Call back to add new Memo book")
      Meteor.call('addMemoBook', memo);

      this.props.history.pushState(null, '/');
    }
    else {
      this.setState({ errors });
    }
  }
  ,

  render: function() {
    return (
      <div className="container text-center col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1">
        <h1>Memo Book Creation</h1>
        <p>In this place you will create your Memo Book.<br/>
          Memo book can also be shared between friends. Simple, just enter your friend's email address below!
        </p>
        <form className="form-horizontal col-md-10 col-md-offset-1 text-left" style={({paddingTop: "20px"})}
              onSubmit={ this.onSubmitEvent } >
          <fieldset>
            <legend className="text-center" style={({marginBottom: "40px"})}>To Live, To Love and Laugh</legend>
            <FormErrors errors={this.state.errors} />

            <MemoCreateInput
              hasError={!!this.state.errors.name}
              type="text"
              name="name"
              label="Book Name"
              placeholder="Nemo's family"
            />

            <MemoCreateInput
              hasError={!!this.state.errors.description}
              type="textarea"
              name="description"
              label="Book Description"
              placeholder="A story about the family of Nemo"
            />

            <MemoCreateInput
              hasError={!!this.state.errors.shareWith}
              type="textarea"
              name="shareWith"
              label="Share With"
              placeholder="nemo@large.ocean"
            />

            <div className="form-group">
              <div className="col-md-offset-2 col-md-8">
                <button type="submit" className="btn btn-info btn-lg btn-block">Create</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});

MemoCreateInput = React.createClass({
  propTypes: {
    hasError: React.PropTypes.bool,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  render() {
    let className = "form-group col-md-12";
    if (this.props.hasError) {
      className += " has-error";
    }

    return (
      <div className={ className } >
        <label className="control-label" htmlFor={ this.props.name }>{ this.props.label }</label>
        { this.props.type == 'textarea' ?
          <textarea
            className="form-control"
            name={ this.props.name }
            placeholder={ this.props.placeholder }
          /> :
          <input
            type={ this.props.type }
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            className="form-control"
          />
        }
      </div>
    );
  }
});