import React from "react";
import Accordion from "./Accordion";
import './App.css'
function App() {
    return (
        <div className="App">
            <h1>Accordion Example</h1>
            {/* Step 1: Display every title of accordion with body. */}
            <Accordion
                title="Accordion 1"
                content="This is the content for Accordion 1."
            />
            <Accordion
                title="Accordion 2"
                content="This is the content for Accordion 2."
            />
            <Accordion
                title="Accordion 3"
                content="This is the content for Accordion 3."
            />
        </div>
    );
}

export default App;
