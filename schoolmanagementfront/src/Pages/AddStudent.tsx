import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './AddStudent.css';

function AddStudent() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: '',
    teacher: '',
  });

  const handleChange = (e) => {
    // Mettez à jour l'état du formulaire en fonction de l'événement de changement
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to add the student to the server
      await axios.post('http://localhost:7070/create', student);
      console.log('Student added successfully:', student);
      // Clear the form after successful submission
      setStudent({
        firstName: '',
        lastName: '',
        age: '',
        teacher: '',
      });
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="form-container">
      <Form className="form-box" onSubmit={handleSubmit}>
        <h1 className="form-title">Add New Students</h1>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
            placeholder="Enter your age"
            min="15"
            max="20"
            required
          />
          <Form.Text className="text-muted">It must be between 15 and 20</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTeacher">
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            type="text"
            name="teacher"
            value={student.teacher}
            onChange={handleChange}
            placeholder="Enter your teacher's name"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Add
        </Button>
      </Form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#898686', // Fond gris foncé
  },
  form: {
    width: '400px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc', // Couleur de fond gris
    borderRadius: '8px',
  },
};

export default AddStudent;