import React, { useState, useEffect } from 'react';

const Users = () => {
    const [ username, setUsername ] = useState('');

    useEffect(() => {
        async function fetchData() {
          try {
            let res = await fetch('http://localhost:3001/user/1');
            let user = await res.json();
            setUsername(user.username);
        } catch (e) {
          //TODO: handle error
        }
      }
      fetchData();
    }, []);

    return (
        <>
            <h3>Velkommen! Please sign in!</h3>
            <form>
                <label>username</label>
                <input 
                    value={username}
                    type="text"
                    onChange={(e)=> {
                      e.preventDefault();
                      setUsername(e.target.value);
                    }}
                >
                </input>
            </form>
    
        </>
    )
}

export default Users;