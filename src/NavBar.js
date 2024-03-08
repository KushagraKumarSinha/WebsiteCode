import React, { useState } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import VKLogo from './images/VKLogo.png';

import Card from 'react-bootstrap/Card';

import 'bulma/css/bulma.css';

import './NavBar.css';

import Button from 'react-bootstrap/Button';

 

function NavBar() {

    const [expanded, setExpanded] = useState(false);

 

    const toggleNavbar = () => {

        setExpanded(!expanded);

    };

 

    return (

        <Navbar bg="dark" expand="md" variant="dark">

            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />

                <Navbar.Brand>

                    <div className='CompanyTitle'>

                        <Card style={{ width: '25rem' }}>

                            <Card.Img variant="top" src={VKLogo} />

                        </Card>

                    </div>

                </Navbar.Brand>

              

                <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>

                    <Nav className="ml-auto text-center"> {/* Use 'text-center' class to center the menu items */}

                        <Nav.Link href="/App" className="rounded-pill"><Button>HOME</Button></Nav.Link>

                        <Nav.Link href="/App2" className="rounded-pill"><Button>ABOUT US</Button></Nav.Link>

                        <Nav.Link href="/App3" className="rounded-pill"><Button>OUR SERVICES</Button></Nav.Link>

                        <Nav.Link href="/App4" className="rounded-pill"><Button>CONTACT US</Button></Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );

}

 

export default NavBar;