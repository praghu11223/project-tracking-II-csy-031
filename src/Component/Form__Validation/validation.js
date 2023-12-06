import React, { useState } from "react";

function Validation() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    error: {},
  });
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      [name]: value,
    });
  };
  function Validator(data) {
    let error = {};
    if (!data.username.trim) {
      error.username = "username required";
    }
    return error;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validator(input);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
    }
    this.setState({
      error: validationErrors,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handlechange}
          ></input>
          {input.error.username && <p>{input.error.username}</p>}
        </div>
        <div>
          <label>email</label>
          <input
            type="password"
            name="email"
            value={input.password}
            onChange={handlechange}
          ></input>
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            Go
          </button>
        </div>
      </form>
    </div>
  );
}

export default Validation;
