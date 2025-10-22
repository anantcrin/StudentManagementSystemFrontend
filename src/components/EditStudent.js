import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/students/${id}`, student)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  // ✅ Show loading while student data is not loaded
  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h3>Edit Student</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            value={student.name}
            onChange={e => setStudent({ ...student, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            value={student.email}
            onChange={e => setStudent({ ...student, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            className="form-control"
            type="number"
            value={student.age}
            onChange={e => setStudent({ ...student, age: parseInt(e.target.value || 0, 10) })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            className="form-control"
            type="text"
            value={student.mobileNumber || ""}
            onChange={e => setStudent({ ...student, mobileNumber: e.target.value })}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
}
