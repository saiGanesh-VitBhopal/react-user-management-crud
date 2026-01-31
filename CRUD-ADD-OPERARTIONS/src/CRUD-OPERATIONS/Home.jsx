import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setData(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="container-center">
      <div className="table-wrapper">
        <h1>List Of Users</h1>
        <div className="add-button-container">
          <Link to="/create" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>

                <td>
                  <div className="action-buttons">
                    <Link to={`/read/${d.id}`} className="btn btn-secondary">
                      Read
                    </Link>

                    <Link to={`/update/${d.id}`} className="btn btn-primary">
                      Edit
                    </Link>

                    <Link to={`/delete/${d.id}`} className="btn btn-danger">
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
