import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Search() {
    const [input, setInput] = useState('');
    const [hallData, setHallData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Fetch the initial hall data when the component mounts
        axios.get('http://127.0.0.1:8000/api/hallfrontend')
            .then((response) => response.data)
            .then((data) => {
                setHallData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // Apply the search filter whenever the input or hallData changes
        const filtered = hallData.filter((user) =>
            user.hname && user.hname.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredData(filtered);
    }, [input, hallData]);

    const handleChange = (value) => {
        setInput(value);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search for a hall..."
            />
            <ul>
                {filteredData.map((hall) => (
                    <li key={hall.id}>{hall.hname}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
