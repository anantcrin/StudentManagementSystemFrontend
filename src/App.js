import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import StudentList from './components/StudentList'; // correct path
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;
