AccFormInput = React.createClass({
  propTypes: {
    hasError: React.PropTypes.bool,
    label: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string
  },
  render() {
    let className = "input-group";
    if (this.props.hasError) {
      className += " has-error";
    }

    return (
      <div style={({marginBottom:"25px"})} className={ className } >
        <span className="input-group-addon"><i className={ this.props.iconClass }/></span>
        <input
          type={ this.props.type }
          name={ this.props.name }
          placeholder={ this.props.label }
          className="form-control"
        />
      </div>
    );
  }
});