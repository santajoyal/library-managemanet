import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    try {
      setLoading(true);
      const books = await axios.get(
        "https://6346c13f9eb7f8c0f884b683.mockapi.io/books"
      );
      setBooks(books.data);
      setLoading(false);
    } catch (error) {
      alert("error");
    }
  };
 
   const deletebook=async(id)=>{
   await axios.delete(`https://6346c13f9eb7f8c0f884b683.mockapi.io/books/${id}`)
   alert("Book is deleted - refersh the page")
   }
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">List of All Books</h1>
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Books Details</h6>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>SI.NO</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Published year</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>SI.NO</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Published year</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  {books.map((data) => {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.author}</td>
                        <td>{data.publisher}</td>
                        <td>{data.published_year}</td>
                        <td>{data.available}</td>
                        <td>
                          <Link
                            to={`/portal/edit-book/${data.id}`}
                            className="btn btn-warning  m-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deletebook(data.id)}
                            className="btn btn-danger m-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
