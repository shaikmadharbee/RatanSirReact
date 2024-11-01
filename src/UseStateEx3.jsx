import { useState } from "react";

function UseStateEx3()
{
    const[score,setScore]=useState(0)
    return(
        <>
        <h1>Cricket Score:{score}</h1>
        <button onClick={()=>setScore(score+1)}>+1</button>
        <button onClick={()=>setScore(score+2)}>+2</button>
        <button onClick={()=>setScore(score+3)}>+3</button>
        <button onClick={()=>setScore(score+4)}>+4</button>
        <button onClick={()=>setScore(score+6)}>+6</button>
        </>
    )
}
export default UseStateEx3;