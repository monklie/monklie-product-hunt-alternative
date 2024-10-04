'use client'
import React, { useState, useEffect } from "react";

export function InterfaceBuilder() {

    const [names, setNames] = useState(['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']);
    
    // Function to add a new predetermined name to the list
    const addName = () => {
        setNames([...names, 'Katherine Johnson']);  // Add the new name here
    };

    return (
        <div style={{ padding: 20 }}>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={addName}>Add Name</button>
        </div>
    );

}