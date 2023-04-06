import React, {Component} from 'react';
import { Button, Container, FormCheck, FormControl, FormGroup, FormLabel, FormText, Form } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Contact us</h1>
                <Form>
                    <FormGroup controlId='formBasicEmail'>
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup controlId='formBasicComment'>
                        <FormLabel>Your comment</FormLabel>
                        <FormControl as="textarea" rows="3"/>
                    </FormGroup>
                    <FormGroup controlId='formBasicCheckbox'>
                        <FormCheck type="checkbox" label="Do you want to receive news?"/>
                    </FormGroup>
                    <Button variant="primary" type="Submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;