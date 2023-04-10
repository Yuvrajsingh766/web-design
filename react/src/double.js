import React, { useState } from "react";
import './double.css'
export default function Double() {
    const [vat, setvat] = useState(0)
    console.log(useState());

    const Doubleon = () => {
        setvat(vat + 1)
    }
    const Doubleoff = () => {
        if (vat > 0) {
            setvat(vat - 1)
        }
        else {
            alert("zero limit")
            setvat(0)
        }
    }
    return <>
        <h1 class="siz">{vat}</h1>
        <div class="flex">
            <button onClick={Doubleon} class="incre">+</button>
            <button onClick={Doubleoff} class="decre">-</button>
        </div>
    </>
}