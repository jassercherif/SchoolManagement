import StudentCard from '../components/StudentCard';

const StudentList = ({ students,setStudents }) => {
  

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {students.map(student => (
        <StudentCard key={student.id} student={student} students={students} setStudents={setStudents} />
      ))}
    </div>
  );
}

export default StudentList;
