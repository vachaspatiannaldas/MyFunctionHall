import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setCpassword] = useState('');
    




    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/register',
                { name, email, password, confirm_password }
            );
    
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control"
                    onChange={(e) => setCpassword(e.target.value)}
                    value={confirm_password}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
    
};

export default Form;
