import React, { useState } from "react";
export default function Decrement() {
    const [vad, setvad] = useState(50);
    console.log(useState());
    const decrement = () => {
        setvad(vad - 1)
    }

    return <>
        <h1>{vad}</h1>
        <button class="btn btn-primary" onClick={decrement}>decrement</button>
    </>
}