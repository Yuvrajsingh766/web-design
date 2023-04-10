import React from "react";
export default function Eventdemo(props) {
    // normal javacript function
    // function callon() {
    //     alert("this is alert event")
    // }

    // arrow function
    const callon = () => {
        alert("this is second method")
    }
    return <>
        <h1 class="text">{props.value}event</h1>
        <button onClick={callon} class="btn btn-success">Click me</button>
    </>;
};