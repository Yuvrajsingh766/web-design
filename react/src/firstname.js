import React from "react";
export default function Firstname() {
    const firstname = () => {
        alert("Firstname")
    }
    return <>
        <h1>Fname</h1>
        <button onClick={firstname}>Fisrtname</button>
    </>
}