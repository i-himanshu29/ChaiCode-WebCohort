import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("Loading..."); //message-variable hai and setMessage - method hai

  //life cycle of useEffect:
  // initialization -> mounting -> updation -> unmounting -> initialization
  useEffect(() => {
    fetch("/api/v1/public/randomusers")
    // fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);

  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
    </div>
  );
}
