import React, { Component } from "react";
import {Navbar,Nav,FormControl,Container,Form,Button
} from "react-bootstrap";

import logo from "./logo192.jpg";
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
                                <Nav.Link href="/Pages/Home"> Home</Nav.Link>
                                <Nav.Link href="/Pages/About"> About us</Nav.Link>
                                <Nav.Link href="/Pages/Contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/Pages/Blog"> Blog </Nav.Link>
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
            </>
        )
    }
}