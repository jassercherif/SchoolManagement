package jasser.dev.schoolmanagementback;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;
	@PostMapping("/create")
	public void createStudent(@RequestBody Student student) {
		studentRepository.insert(student);
	}
	@DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id) {
		studentRepository.deleteById(id);
	}
    @GetMapping("/api/students")
    public List<Student> listeStudent() {
    	return studentRepository.findAll();
}
    @GetMapping("/api/students/{id}")
    public Optional<Student> getSingleStudent(@PathVariable String id) {
    	return studentRepository.findById(id);
}   
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateStudent(@PathVariable String id,@RequestBody Student student) {
    	boolean bl = studentRepository.existsById(id);
    	Optional<Student>std = studentRepository.findById(id);
    	Student studentToUpdate =std.get() ;
    	if(bl) {
    		studentToUpdate.setFirstName(student.getFirstName());
    		studentToUpdate.setLastName(student.getLastName());
    		studentToUpdate.setAge(student.getAge());
    		studentToUpdate.setTeacher(student.getTeacher());
    		studentRepository.save(studentToUpdate);
    		return new ResponseEntity<>("étudianr mis à jour avec succès", HttpStatus.OK);
    	} else {
    		return new ResponseEntity<>("étudiant n'existe pas", HttpStatus.OK);
    	}
    }
}
