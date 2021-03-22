import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  let history = useHistory();

  async function CheckLogin() {
    try {
      if (!username) {
        alert("Username cannot be empty");
        return false;
      }
      let res = await fetch(`http://localhost:3001/login/${username}`);
      let resultObject = await res.json();
      if (resultObject.success === true) {
        history.push("/events");
      } else {
        alert("username not found");
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <h3>Velkommen! Please sign in!</h3>
      <form onSubmit={submitForm}>
        <label>username: </label>
        <input
          value={username}
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        ></input>
        <button onClick={CheckLogin}>Login</button>
      </form>
    </>
  );
};

export default Login;
