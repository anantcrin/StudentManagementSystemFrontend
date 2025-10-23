import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError(''); // clear previous errors
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', { email, password });

      // Successful login → redirect
      alert(res.data.message || 'Login successful');
      navigate('/student'); // redirect after login

    } catch (err) {
      // Axios errors: err.response contains backend response
      setError(err.response?.data?.message || 'Login failed');
      console.error('Login error:', err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/bmw-m4-competition-black.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="card p-4 shadow" style={{ width: '400px', backgroundColor: 'rgba(80, 29, 29, 0.85)' }}>
        <h3 className="text-center mb-4">Sign In</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );

}
