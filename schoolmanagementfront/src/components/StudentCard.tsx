import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const StudentCard = ({ student,students,setStudents }) => {
  const { id, firstName, lastName, age, teacher } = student;

  const onDelete = async (id) => {
    try {
      // Make an asynchronous HTTP DELETE request to delete the student with the given ID
      await axios.delete(`http://localhost:7070/delete/${id}`);
  
      // After successful deletion, update the list of students displayed in your UI
      // Remove the deleted student from the existing list
      const updatedStudents = students.filter(student => student.id !== id);
      setStudents(updatedStudents);
  
      console.log(`Student with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting student with ID ${id}:`, error);
    }
  };
 


  const onUpdate = async (updatedStudent) => {
    try {
      await axios.put(`http://localhost:7070/update/${updatedStudent.id}`, updatedStudent);
      const updatedStudents = students.map(student => student.id === updatedStudent.id ? updatedStudent : student);
      setStudents(updatedStudents);
      console.log(`Student with ID ${updatedStudent.id} updated successfully.`);
    } catch (error) {
      console.error(`Error updating student with ID ${updatedStudent.id}:`, error);
    }
  };

  
 
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`Age: ${age}`}</Card.Subtitle>
        <Card.Text>{`Teacher: ${teacher}`}</Card.Text>
        <Button variant="primary" onClick={() => onUpdate(student)}>
          Update
        </Button>
        <Button variant="danger" onClick={() => onDelete(id)} style={{ marginLeft: '5px' }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
