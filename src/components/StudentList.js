import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const fetch = () => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => { fetch(); }, []);

  const deleteStudent = (id) => {
    if (!window.confirm('Delete this student?')) return;
    axios.delete(`http://localhost:5000/api/students/${id}`)
      .then(() => fetch())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>Students</h3>
      <table className="table">
        <thead><tr><th>Name</th><th>Email</th><th>Age</th><th>Mobile Number</th><th>Action</th></tr></thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>
              <td>{s.mobileNumber}</td>
              <td>
                <Link className="btn btn-sm btn-primary me-2" to={`/edit/${s.id}`}>Edit</Link>
                <button className="btn btn-sm btn-danger" onClick={() => deleteStudent(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
