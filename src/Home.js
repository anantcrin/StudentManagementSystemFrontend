import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/bentley-batur-black.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <h2>Welcome</h2>
        <Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link>
      </div>
    </div>

  );
}
