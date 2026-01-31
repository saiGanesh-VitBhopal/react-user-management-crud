import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Read() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container-center">
      <div className="form-card">
        <h3>Detail of User</h3>

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
          <Link to={`/update/${id}`} className="btn btn-primary">
            Edit
          </Link>

          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
