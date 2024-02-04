import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre le formulaire (envoi au serveur, etc.)
    console.log('Student submitted:', student);
  };

  return (
    <div style={styles.container}>
      <Form style={styles.form} onSubmit={handleSubmit}>
        <h1>Add New Students</h1>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
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
          />
        </Form.Group>

        <Button variant="primary" type="submit">
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
