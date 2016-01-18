MemoViewEdit = React.createClass({
  propTypes: {
    memoBook: React.PropTypes.object
  },

  getInitialState() {
    return {
      errors: {}
    };
  },

  onSubmitEvent(event) {
    event.preventDefault();

    const memo = this.props.memoBook
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
      Meteor.call('updateMemoBook', memo);
    }
    else {
      this.setState({ errors });
    }
  },

  render: function() {
    return (
      <div className="col-sm-9 col-md-10 main">
        <form className="form-horizontal" style={({paddingTop: "20px"})}
              onSubmit={ this.onSubmitEvent } >
          <fieldset>
            <legend style={({marginBottom: "40px"})}>Laugh more, Love more</legend>
            <FormErrors errors={this.state.errors} />

            <MemoEditInput
              hasError={!!this.state.errors.name}
              type="text"
              name="name"
              label="Book Name"
              value={this.props.memoBook.name}
            />

            <MemoEditInput
              hasError={!!this.state.errors.description}
              type="textarea"
              name="description"
              label="Book Description"
              value={this.props.memoBook.description}
            />

            <ShareWithInput
              hasError={!!this.state.errors.shareWith}
              type="textarea"
              name="shareWith"
              label="Share With"
              value={this.props.memoBook.shareWith}
              placeholder="nemo@large.ocean"
            />

            <div className="form-group">
              <div className="col-md-offset-2 col-md-8">
                <button type="submit" className="btn btn-info btn-lg btn-block">Save</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
});


MemoEditInput = React.createClass({
  propTypes: {
    hasError: React.PropTypes.bool,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
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
            defaultValue={ this.props.value }
          /> :
          <input
            type={ this.props.type }
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            className="form-control"
            defaultValue={ this.props.value }
          />
        }
      </div>
    );
  }
});