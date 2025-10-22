import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [age,setAge] = useState('');
  const [mobilenumber,setMobileNumber] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/students', { name, email, age: parseInt(age,10), mobilenumber})
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>Add Student</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input className="form-control" type="number" value={age} onChange={e=>setAge(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Number</label>
          <input className="form-control" type="number" value={mobilenumber} onChange={e=>setMobileNumber(e.target.value)} required />
        </div>
        
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
}
