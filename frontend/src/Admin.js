import Api from './api';
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUsers, setIsUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      let resUsers = await Api.getAllUsers();
      setIsUsers(resUsers);
      console.log(resUsers);
      setIsLoading(false);
    }
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>Here is a list of all users:</h1>
      {isUsers.map(u => (
        <p key={u.id}>
          {u.firstName} {u.lastName}
        </p>
      ))}
    </div>
  );
};

export default Admin;
