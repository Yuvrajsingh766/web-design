import React, { useState } from "react";
import './App.css'

export default function Accordion({ title, content }) {
    // Step 2: Create a state to manage the visibility of the accordion body.
    const [isVisible, setIsVisible] = useState(false);

    // Step 3: Toggle visibility of accordion body on click of title.
    const toggleAccordion = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="accordion">
            <div className="accordion-title" onClick={toggleAccordion}>
                {title}
            </div>
            {isVisible && (
                <div className="accordion-body">
                    {content}
                </div>
            )}
        </div>
    );
}