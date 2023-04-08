import React, { Component } from 'react';
import {Container, Col, Row, Card, ListGroup, Button} from "react-bootstrap";
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.jpg';
import Blog3 from '../assets/blog3.jpg';

class Blog extends Component {
    render() {
        return (
            <Container>
                <h1>#</h1>
                <Row>
                    <Col md="9">
                        <div className="d-flex align-items-center m-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={220}
                                    height={150}
                                    className="mr-3"
                                    src={Blog1}
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                    <p>
                                        Learn how to write blog posts
                                    </p>
                            </div>
                            <Button href="/firstpost" variant="primary">Open</Button>
                        </div>

                        <div className="d-flex align-items-center m-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={220}
                                    height={150}
                                    className="mr-3"
                                    src={Blog2}
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Time to travel</h5>
                                <p>
                                    We are going to meet the new
                                </p>
                            </div>
                            <Button href="/secondpost" variant="primary">Open</Button>
                        </div>

                        <div className="d-flex align-items-center m-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={220}
                                    height={150}
                                    className="mr-3"
                                    src={Blog3}
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Gaming news</h5>
                                <p>
                                    Find out about all the new products as soon as possible
                                </p>
                            </div>
                            <Button href="/thirdpost" variant="primary">Open</Button>
                        </div>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Технології та наука</ListGroup.Item>
                                    <ListGroup.Item>Подорожі</ListGroup.Item>
                                    <ListGroup.Item>Спорт та фітнес</ListGroup.Item>
                                    <ListGroup.Item>Краса та мода</ListGroup.Item>
                                    <ListGroup.Item>Культура та мистецтво</ListGroup.Item>
                                    <ListGroup.Item>Економіка та бізнес</ListGroup.Item>
                                    <ListGroup.Item>Життя та стиль</ListGroup.Item>
                                    <ListGroup.Item>Їжа та кулінарія</ListGroup.Item>
                                </ListGroup>
                        </Card>
                        <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Look at me
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;