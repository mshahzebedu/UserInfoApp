import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3003/users", user);

    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">User Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter User Name"
              value={user.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter Phone"
              value={user.phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Webiste</label>
            <input
              type="text"
              className="form-control"
              name="website"
              placeholder="Enter website"
              value={user.website}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Adduser;
