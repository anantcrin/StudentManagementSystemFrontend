import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link>
    </div>
  );
}
