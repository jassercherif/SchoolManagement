
import { Card, Button } from 'react-bootstrap';

const StudentCard = ({ student }) => {
  const { id, firstName, lastName, age, teacher } = student;

  const onDelete = (id) => {
    // Logique de suppression
    // Mettez à jour la liste des étudiants (setStudents) sans l'étudiant ayant l'ID studentId
  };

  const onUpdate = (student) => {
    // Logique de mise à jour
    // Utilisez les informations de l'étudiant pour effectuer les modifications nécessaires
  };
 
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`Age: ${age}`}</Card.Subtitle>
        <Card.Text>{`Teacher: ${teacher}`}</Card.Text>
        <Button variant="primary" onClick={() => onUpdate(id)}>
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
