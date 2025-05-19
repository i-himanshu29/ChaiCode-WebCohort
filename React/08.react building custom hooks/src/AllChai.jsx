import {useState,useEffect} from "react";

export function ChaiMenu(){

    const [menu,setMenu] = useState([]);
    const [error,setError] = useState("")

    useEffect(()=>{
        fetch("/api/all-chai")// api to be implement or u can use freeapi
            .then(res=>res.json())
            .then(data => setMenu(data))
            .catch(err=>setError(err.message))
    },[])

    return (
        <div>
            <h2>Available chai</h2>
            <ul>
               { menu.map(chai => (
                <li key={chai.name}>{chai.name}</li>//key should be unique - avoid index till u can avoid || majority of time aap db ki id hi use karoge || keys can also be used in web sockets
               ))}
            </ul>
        </div>
    )
}


// # - 
// - key is same => reuse DOM mode
// - key is new => add a new DOM node
// - key is missing => remove the DOM node


// if u dont have key : Problem occur -> re-render, reorder 
// never use Key:index in price => high to low , low to high