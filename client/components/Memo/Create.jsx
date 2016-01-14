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

  render: function() {
    return (
      <div className="container text-center col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1">
        <h1>Memo Book Creation</h1>
        <p>In this place you will create your Memo Book.<br/>
          Memo book can also be shared between friends. Simple, just enter your friend's email address below!
        </p>
        <form className="form-horizontal col-md-10 col-md-offset-1 text-left" style={({paddingTop: "20px"})}>
          <fieldset>
            <legend className="text-center">To Live, To Love and Laugh</legend>

            <MemoCreateInput
              hasError={!!this.state.errors.name}
              type="text"
              name="name"
              label="Book Name"
              placeholder="Meo and Chom"
            />

            <MemoCreateInput
              hasError={!!this.state.errors.description}
              type="textarea"
              name="description"
              label="Book Description"
              placeholder="Memories from our love story..."
            />

            <MemoCreateInput
              hasError={!!this.state.errors.sharewith}
              type="textarea"
              name="sharewith"
              label="Share With"
              placeholder="nemo@large.ocean"
            />
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
            defaultValue={ this.props.placeholder }
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