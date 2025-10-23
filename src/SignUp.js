import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/signup', { email, password })
      .then(res => {
        alert(res.data.message);
        navigate('/signin');
      })
      .catch(err => alert(err.response.data));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/bugatti-la-voiture.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div>
        <h3>Sign Up</h3>
        <form onSubmit={submit}>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
