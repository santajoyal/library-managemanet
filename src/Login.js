import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Usercontext";

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.username) {
        error.username = "please enter the email";
      }

      if (!values.password) {
        error.password = "please enter the password";
      }
      return error;
    },
    onSubmit: (values) => {
      setUser({ username: values.username });
      navigate("/portal/books");
    },
  });
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user" onSubmit={formik.handleSubmit}>
                      <div class="form-group">
                        <input
                          name="username"
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          type="email"
                          class={`form-control form-control-user ${
                            formik.touched.username && formik.errors.username
                              ? "error-box"
                              : ""
                          }
                        ${
                          formik.touched.username && !formik.errors.username
                            ? "success-box"
                            : ""
                        }`}
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />{" "}
                        {formik.touched.username && formik.errors.username ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.username}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div class="form-group">
                        <input
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          type="password"
                          class={`form-control form-control-user ${
                            formik.touched.password && formik.errors.password
                              ? "error-box"
                              : ""
                          } ${
                            formik.touched.password && !formik.errors.password
                              ? "success-box"
                              : ""
                          }`}
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.password}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        href="index.html"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                     
                     
                    </form>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
