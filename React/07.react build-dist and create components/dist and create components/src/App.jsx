import { useState, useEffect } from "react";
import { ChaiMenu } from "./AllChai";

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

  // setMessage("loaded");

  // suppose you havw initalize use effect with 1 in setMessage
  // now u want to set with the preveious value
  setMessage(prev => prev +1);

  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
      <ChaiMenu/>
    </div>
  );
}
