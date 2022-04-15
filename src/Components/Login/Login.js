import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";
import axios from "axios";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      isAuth: false,
      respData: null,
    };
  }
  create(e) {
    e.preventDefault();
    console.log(e.target.password.value, "email value");
    axios
      .post("https://reqres.in/api/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((response) => {
        alert("User is Valid");
      })
      .catch((error) => {
        alert("User Not Found in DataBase");
        console.log(error, "Error");
      });
  }

  render() {
    return (
      <div>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form
                  onSubmit={(e) => {
                    this.create(e);
                  }}
                >
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      placeholder="example@test.com"
                      name="email"
                      className="form-control form-control-lg"
                      id="email"
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2022. All rights reserved.
            </div>
            <div>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div> */}
        </section>
      </div>
    );
  }
}
