import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.status === 200) {
                localStorage.setItem('username', username);
                window.location.href = '/welcome';
            }
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        
            <div className='login-container'>
                
                <form className='card' onSubmit={handleLogin}>
                    <label htmlFor="username">Username</label>
                    <input  
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='login-btn' type="submit">Login</button>
                    {error && <p className='error-msg'>{error}</p>}
                </form>
                
            </div>
        
    );
};
export default Login