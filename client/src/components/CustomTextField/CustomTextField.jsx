import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { adduser } from "../../store/actions/user";
import "./CustomTextField.css";

class CustomTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  render() {
    const onChange = (e, field) => {
      let hasError = e.target.value.length < field.minLength ? true : false;

      this.setState({ hasError });
      this.props.adduser({ [field.name]: e.target.value });
    };

    return (
      <>
      <TextField
        label= {this.props.field.label}
        helperText={this.props.field.helperText}
        minLength={this.props.field.minLength}
        required={this.props.field.required}
        type={this.props.field.type}
        className="text-field"
        onChange={(e) => onChange(e, this.props.field)}
        style={{ margin: 8 }}
        placeholder={this.props.field.defaultValue.toString()}
        fullWidth
        variant="filled"
      ></TextField>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  adduser: (data) => {
    dispatch(adduser(data));
  },
});

export {CustomTextField};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTextField);
