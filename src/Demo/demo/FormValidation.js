import React, { useState } from "react";

function FormValidation() {
  const [input, setInput] = useState({
    name: "",
    mail: "",
    pass: "",
  });
  var error = {};
  const Error = () => {
    if (!input.name) {
      error.e1 = "please enter name";
      console.log(error.e1);
    }
    if (!input.mail) {
      error.e2 = "please enter mail";
    }
    if (!input.pass) {
      error.e3 = "please enter pass";
    }
  };
  const handleName = (event) => {
    setInput({ name: event.target.value });
  };
  const handleMail = (event) => {
    setInput({ mail: event.target.value });
  };
  const handlePass = (event) => {
    setInput({ pass: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    Error();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Username:
          <input type="text" value={input.name} onChange={handleName}></input>
          {<p>{error.e1}</p>}
        </div>
        <div>
          Email:
          <input type="email" value={input.mail} onChange={handleMail}></input>
        </div>
        <div>
          Password:
          <input
            type="password"
            value={input.pass}
            onChange={handlePass}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error.e2 && <p>${error.e2}</p>}
      {error.e3 && <p>${error.e3}</p>}
    </div>
  );
}

export default FormValidation;
