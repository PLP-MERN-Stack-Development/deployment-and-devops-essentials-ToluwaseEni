import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/`) // fetch from backend
      .then((res) => setMessage(res.data))
      .catch((err) => setMessage("Error connecting to backend 😞"));
  }, []);

  return (
    <div className="App">
      <h1>🌍 MERN App Deployment Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
