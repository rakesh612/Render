import React, { useState } from 'react';
import api from './axios';

const App = () => {
  const [message, setMessage] = useState(''); // state to store response message

  const fetchData = async () => {
    try {
      const res = await api.get("/data");
      console.log(res.data.message);
      setMessage(res.data.message); // update state with backend message
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error fetching data");
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Click</button>
      <h1>{message}</h1> {/* Display message here */}
    </div>
  );
};

export default App;
