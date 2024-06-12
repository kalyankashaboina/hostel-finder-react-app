import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBell } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function NavScrollExample({ handleSearch, handleClick }) {


    const [searchTerm, setSearchTerm] = useState('');

    const[msg]=useState(["hello","hi"])
    const[boolean,setBoolean]=useState(false)

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchTerm);
    };


const handleBell=()=>{
setBoolean(!boolean)
}

const styleBell={"color":"red", position:'relative',left:"40px",top:"8px"}

const SpanButton={"color":"black",borderRadius:"50%","fontSize":"10px",fontWeight:"100px",position:"absolute","bottom":"10px"}

const notify={
  position: 'absolute',
    top: '40px',
    right: '60%',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    minWidth: '200px',
    zIndex: 1000,


  // position:"absolute",top:"50px",right:"63%",textTransform:"uppercase",fontWeight:"200",background:"aquamarine",padding:"0 20px",borderRadius:"20px"
}
const close={display:"none"}


const notidyitem = {
  padding: '10px',
  borderBottom: '1px solid #eee',
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
<div>
<div className='bell' onClick={handleBell}  style={styleBell}>

<FaBell />
{msg.length>0 && <span style={SpanButton}>{msg.length}</span>}
</div>
<div style={boolean?notify:close}>
{msg&&msg.length>0?msg.map((val,ind)=>{
  return<div style={notidyitem}><span>{val}</span></div>
}):null}
</div>
</div>

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