

import React, { Component } from "react";
import jumpTo from "../../modules/Navigation";
import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userRegister } from "../../redux/actions/RegisterAction";
import LoadingButton from "../LoadingButton";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { firstName, lastName, address, phone, email, password } = this.state;
    if (!Validator(firstName, DEFAULT_RULE)) {
      console.log("Name Error");
      return;
    }
    if (!Validator(lastName, DEFAULT_RULE)) {
      console.log("Name Error");
      return;
    }
    if (!Validator(address, DEFAULT_RULE)) {
      console.log("Name Error");
      return;
    }
    if (!Validator(phone, DEFAULT_RULE)) {
      console.log("Name Error");
      return;
    }
    if (!Validator(email, EMAIL_RULE)) {
      console.log("email Error");
      return;
    }
    if (!Validator(password, DEFAULT_RULE)) {
      console.log("Password Error");
      return;
    }
    this.setState({ loading: true });
    this.props
      .userRegister(firstName, lastName, address, phone, email, password)
      .then(res => {
        console.log(res);
        this.props.loginClicked();
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        <div className="login-form">
          <h2>Register</h2>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="First Name "
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-user"></i>
          </div>

          <div className="form-group ">
            <input
                type="text"
                className="form-control"
                placeholder="Last Name "
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                autoComplete="false"
            />
            <i className="fa fa-user"></i>
          </div>

          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-envelope"></i>
          </div>

          <div className="form-group ">
            <input
                type="text"
                className="form-control"
                placeholder="Address "
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                autoComplete="false"
            />
            <i className="fa fa-envelope"></i>
          </div>

          <div className="form-group ">
            <input
                type="text"
                className="form-control"
                placeholder="Phone Number "
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                autoComplete="false"
            />
            <i className="fa fa-envelope"></i>
          </div>

          <div className="form-group log-status">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-lock"></i>
          </div>
          <span className="alert">Invalid Credentials</span>
          <LoadingButton
            type="button"
            className="log-btn"
            loading={this.state.loading}
            onClick={() => this.handleSubmit()}
          >
            Register
          </LoadingButton>
          <div
            onClick={this.props.loginClicked}
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#c4c4c4",
              cursor: "pointer"
            }}
          >
            Already have an account ? Please login.
          </div>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  loginClicked: PropTypes.func
};

const mapDispatchToProps = {
  userRegister
};
const mapStoreToProps = state => ({
  register_loading: state.register.register_loading,
  register_error: state.register.error
});

export default connect(mapStoreToProps, mapDispatchToProps)(RegisterForm);
