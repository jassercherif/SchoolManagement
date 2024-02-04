import StudentCard from '../components/StudentCard';

const StudentList = ({ students }) => {
  

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
