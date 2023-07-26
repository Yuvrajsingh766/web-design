import React from "react";
import { useState } from "react";

export default function Increment() {
    const [increment, setincrement] = useState(0)

    function incre() {
        setincrement(increment + 1)
    }

    function decre() {
        if (increment > 0) {
            setincrement(increment - 1)

        }
        else {
            alert("zero limit")
            setincrement(0)
        }
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>increment/decrement</h2>
                </div>
                <div className="card-body">
                    <h1 style={{ color: "blur " }}> number: {increment}</h1>
                </div>
                <div className="card-footer">
                    <button className="btn btn-dark me-3" onClick={() => incre()}>+</button>
                    <button className="btn btn-info" onClick={() => decre()}>-</button>
                </div>
            </div>
        </div>
    )
}