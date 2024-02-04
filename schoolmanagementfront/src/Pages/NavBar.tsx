// SchoolNavbar.jsx

import { Navbar, Container, Nav } from 'react-bootstrap';
  // Assurez-vous que le chemin du fichier CSS est correct
import { MdOutlineSchool } from "react-icons/md";

function SchoolNavbar() {
  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Noir avec une opacité de 0.7
  };

  return (
    <Navbar style={navbarStyle} variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/"><MdOutlineSchool />&nbsp;&nbsp;School Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Welcome</Nav.Link>
            <Nav.Link href="/student-list">Student List</Nav.Link>
            <Nav.Link href="/add-student">Add Student</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SchoolNavbar;
