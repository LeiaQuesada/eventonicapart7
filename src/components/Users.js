import React, { useState, useEffect } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(`http://localhost:3001/login/${username}`);
        let resultObject = await res.json();
        if (resultObject.success === true) {
          alert(
            `Are you sure you want to delete user ${username}? If not, hit go back`
          );
        } else {
          alert("username not found");
        }
      } catch (e) {
        console.error(e.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>Edit Profile</h3>
      <form>
        <label>username</label>
        <input
          value={username}
          type="text"
          onChange={(e) => e.target.value}
        ></input>
        <button onClick={() => setUsername({ username })}>login</button>
      </form>
    </>
  );
};

export default Profile;
