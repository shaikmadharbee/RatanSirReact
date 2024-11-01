import { useState } from "react";

function UseStateEx1()
{
    const[count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <>
        <h1>This is the Counter value:{count} </h1>
        <button style={{color:'red'}} onClick={handleClick}>Increament</button>
        </>
    )
}
export default UseStateEx1;