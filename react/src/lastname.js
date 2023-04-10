import React from "react";
export default function Lastname() {
    // const name = document.getElementsByClassName("name").text;
    const lastname = () => {
        alert("Lastname")

    }
    return <>
        <div>
            <h1 class="name">Lname</h1>
            <input type="button" value="lastname" onClick={lastname}></input>
            {/* <button onClick={lastname}> lastname</button> */}
        </div>
    </>
}