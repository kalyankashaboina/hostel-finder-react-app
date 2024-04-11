import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function NavScrollExample({ handleSearch, handleClick }) {


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchTerm);
    };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
           <Container fluid> 
   

        <Navbar.Brand href="#">Hostel Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link> 
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          <Nav.Link href="/">
  Signout
</Nav.Link>

          </Nav>
          <Form className="d-flex"   onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search hostel or price"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type='submit' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;