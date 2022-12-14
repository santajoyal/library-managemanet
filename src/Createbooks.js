import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Createbooks() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publisher: "",
      published_year: "",
      available: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.title) {
        error.title = "Please enter the book title";
      }

      if (!values.author) {
        error.author = "Please enter the author name";
      }

      if (!values.publisher) {
        error.publisher = "please enter the publisher name";
      }

      if (!values.published_year) {
        error.published_year = "Please enter the publisher yaer";
      }

      if (!values.available) {
        error.available = "Please enter the status";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://6346c13f9eb7f8c0f884b683.mockapi.io/books",
          values
        );
        alert("Book is Added Successfully");
        navigate("/portal/books");
      } catch (error) {
        alert("error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <h2>Add a New Book</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Book Title</label>
              <input
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
                type={"text"}
                className={`form-control${
                  formik.touched.title && formik.errors.title ? "error-box" : ""
                } ${
                  formik.touched.title && !formik.errors.title
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.title && formik.errors.title ? (
                <span style={{ color: "red" }}>{formik.errors.title}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Author Name</label>
              <input
                name="author"
                onChange={formik.handleChange}
                value={formik.values.author}
                onBlur={formik.handleBlur}
                type={"text"}
                className={`form-control${
                    formik.touched.author && formik.errors.author ? "error-box" : ""
                  } ${
                    formik.touched.author && !formik.errors.author
                      ? "success-box"
                      : ""
                  }`}
              />
              {formik.touched.author && formik.errors.author ? (
                <span style={{ color: "red" }}>{formik.errors.author}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Publisher Name</label>
              <input
                name="publisher"
                onChange={formik.handleChange}
                value={formik.values.publisher}
                onBlur={formik.handleBlur}
                type={"text"}
                className={`form-control${
                    formik.touched.publisher && formik.errors.publisher ? "error-box" : ""
                  } ${
                    formik.touched.publisher && !formik.errors.publisher
                      ? "success-box"
                      : ""
                  }`}
              />
              {formik.touched.publisher && formik.errors.publisher ? (
                <span style={{ color: "red" }}>{formik.errors.publisher}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Published Year</label>
              <input
                name="published_year"
                onChange={formik.handleChange}
                value={formik.values.published_year}
                onBlur={formik.handleBlur}
                type={"number"}
                className={`form-control${
                    formik.touched.published_year && formik.errors.published_year ? "error-box" : ""
                  } ${
                    formik.touched.published_year && !formik.errors.published_year
                      ? "success-box"
                      : ""
                  }`}
              />
              {formik.touched.published_year && formik.errors.published_year ? (
                <span style={{ color: "red" }}>{formik.errors.published_year}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Book Status</label>
              <select
                name="available"
                onChange={formik.handleChange}
                value={formik.values.available}
                onBlur={formik.handleBlur}
                type={"text"}
                className={`form-control ${
                    formik.touched.available && formik.errors.available? "error-box" : ""
                  } ${
                    formik.touched.available && !formik.errors.available
                      ? "success-box"
                      : ""
                  }`}
              >
                <option>--select status--</option>
                <option>Available</option>
                <option>Not Available</option>
              </select>
              {formik.touched.available && formik.errors.available ? (
                  <span style={{ color: "red" }}>{formik.errors.available}</span>
                ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" disabled={formik.errors.values}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createbooks;
