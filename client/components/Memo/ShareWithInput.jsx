ShareWithInput = React.createClass({
  propTypes: {
    hasError: React.PropTypes.bool,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
  },

  componentDidMount() {
    this.initHighLight()
  },

  initHighLight() {
    const shareWith = this.refs.shareWith;
    if (shareWith) {
      console.log($(shareWith).highlightTextarea({
        words: []
      }))
    }
  },

  render() {
    let className = "form-group col-md-12";
    if (this.props.hasError) {
      className += " has-error";
    }

    return (
      <div className={ className } >
        <label className="control-label" htmlFor={ this.props.name }>{ this.props.label }</label>
        { !this.props.value || this.props.value == "" ?
          <textarea
            className="form-control"
            name={ this.props.name }
            ref="shareWith"
            placeholder={ this.props.placeholder }
          /> :
          <textarea
            className="form-control"
            name={ this.props.name }
            ref="shareWith"
            placeholder={ this.props.placeholder }
            defaultValue={this.props.value}
          />
        }
      </div>
    );
  }
});