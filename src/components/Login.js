import React, { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(`http://localhost:3001/login/${username}`);
        let user = await res.json();
        setUsername(user.username);
      } catch (e) {
        console.error(e.message);
      }
    }
    fetchData();
  }, [username]);

  return (
    <>
      <h3>Velkommen! Please sign in!</h3>
      <form>
        <label>username: </label>
        <input
          value={username}
          type="text"
          onChange={(e) => e.target.value}
        ></input>
        <button onClick={() => setUsername({ username })}>Login</button>
      </form>
    </>
  );
};

export default Login;
