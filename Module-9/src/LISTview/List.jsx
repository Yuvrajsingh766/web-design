import React, { useState } from 'react'

function List() {
    const initialData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
    ];

    // State to hold the data
    const [data, setData] = useState(initialData);

    return (
        <div>
            <h2>List View</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default List
