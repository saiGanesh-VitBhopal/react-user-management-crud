import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/users/${id}`, values)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-center">
      <div className="form-card">
        <h1>Update User</h1>

        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-input"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          <div className="button-group">
            <button className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-secondary">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
