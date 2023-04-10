import React, { useState } from "react";
export default function Increment() {
    // let val = 0;
    const [val, setval] = useState(0);
    console.log(useState());
    const increment = () => {
        setval(val + 1)
    }
    return <>
        <h1>{val}</h1>
        <button className="btn btn-primary" onClick={increment}>increment</button>
    </>
}