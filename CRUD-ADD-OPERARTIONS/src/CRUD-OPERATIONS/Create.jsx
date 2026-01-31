import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Create() {
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })

      .catch((err) => console.error("API error:", err));
  };

  return (
    <div className="container-center">
      <div className="form-card">
        <h1>Add a User</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              name="id"
              className="form-input"
              placeholder="Enter ID"
              onChange={(e) => setValues({ ...values, id: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-input"
              placeholder="Enter Phone"
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

export default Create;
