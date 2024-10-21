import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SchoolNavbar from './Pages/NavBar';
import WelcomePage from './Pages/WelcomePage';
import StudentList from './Pages/StudentList';
import AddStudent from './Pages/AddStudent';
// import Management from './Pages/Management'; 


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7070/api/students')
      .then(response => {
        // Utilisez setStudents pour mettre à jour l'état avec les données reçues
        console.log(response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching Students:', error);
      });
  }, []);

  return (
    <Router>
      <div>
        <SchoolNavbar />
        <Routes>
          <Route path="/" element={<WelcomePage   />} />
           {/*<Route path="/management" element={<Management />} />*/}
          <Route path="/student-list" element={<StudentList students={students} setStudents={setStudents} />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
