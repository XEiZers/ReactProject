import React, { Component } from "react";
import {Navbar,Nav,FormControl,Container,Form,Button} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import logo from "./logo192.jpg";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Home from "./Pages/Home";

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt = "Logo"
                            /> React Site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav claccName="me-auto">
                                <Nav.Link href="/Home"> Home</Nav.Link>
                                <Nav.Link href="/About"> About us</Nav.Link>
                                <Nav.Link href="/Contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/Blog"> Blog </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type ="text"
                                    placeholder="Search"
                                    className="me-sm-3"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/Home" element={<Home />}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Contacts" element={<Contacts/>}/>
                        <Route path="/Blog" element={<Blog/>}/>
                    </Routes>
                </Router>

            </>
        )
    }
}