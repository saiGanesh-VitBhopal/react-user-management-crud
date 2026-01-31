import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-center">
      <div className="form-card">
        <h3>Delete User</h3>

        <div className="detail-item">
          <strong>Name: {data.name}</strong>
        </div>

        <div className="detail-item">
          <strong>Email: {data.email}</strong>
        </div>

        <div className="detail-item">
          <strong>Phone: {data.phone}</strong>
        </div>

        <div className="button-group">
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
          <Link to="/" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Delete;
