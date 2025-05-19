import { useState, useEffect } from "react";
import { ChaiMenu } from "./AllChai";
import { useSpecialChai } from "./hooks/useSpecialChai";

export function App() {
  const {chai,loading,error} = useSpecialChai()
  const [message, setMessage] = useState("Loading..."); //message-variable hai and setMessage - method hai

  console.log("chai :",chai);
  useEffect(() => {
    fetch("/api/v1/public/randomusers")
    // fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);

  if(loading) return <h2>loading...</h2>
  if(error) return <h2>Error:{error} </h2>
  
  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
      <ChaiMenu/>
      <h3>{chai.name}</h3>
    </div>
  );
}
