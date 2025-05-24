import useState from "react"

export function ChaiCounter(){
    const [count,setCount] = useState(0)

    const serveChai = () => {
        setCount(prev => prev+1)
    }
    return (
        <div>
            <h2>Chai Counter</h2>
            <p>You have served {count} cups of chai</p>// variable passs in obj.
            {/* <button onClick={()=> setCount(prev=>prev+1)}>Serve chai</button> // function passes in obj. */}
            <button onClick={serveChai}>Serve chai</button> // function passes in obj.
        </div>
    )
}