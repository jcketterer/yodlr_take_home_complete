import Api from './api';
import React, { useState } from 'react';

const Register = () => {
  const [data, setData] = useState();
  const [isReg, setIsReg] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    Api.registerUser(data);
    setIsReg(true);
  };

  return (
    <div>
      {!isReg && (
        <div>
          <form>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      )}
      {isReg && (
        <div>
          <h1>Thank you for registering</h1>
        </div>
      )}
    </div>
  );
};

export default Register;
