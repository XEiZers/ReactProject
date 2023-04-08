import React, {Component} from 'react';
import {Tab, Container, Row, Col, Nav, Button, Card, ListGroup, Image} from 'react-bootstrap';
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";


class FirstPost extends Component {
        render()
        {
            return (
                <Container>
                    <h1>#</h1>
                    <h1 className="text-center m-4">Write your own post</h1>
                    <Row>
                        <Col md="5">
                            <div className="d-flex align-items-center m-5">
                                <div className="flex-shrink-0">
                                    <img
                                        width={400}
                                        height={300}
                                        className="mr-3"
                                        src={Blog1}
                                        alt="photo" />
                                </div>
                            </div>
                        </Col>
                        <Col md="7">
                            <h5 className="text-center mt-5">Writing your own post can be a daunting task, especially if you are not used to expressing your thoughts and ideas in writing. However, with a little guidance and practice, you can become a confident and effective writer.

                                The first step in writing your own post is to choose a topic that interests you. It could be something you are knowledgeable about or something that you are passionate about. It is important to choose a topic that will engage your readers and keep them interested throughout the post.

                                Once you have chosen a topic, the next step is to plan out your post. This involves outlining the main points you want to cover, organizing your thoughts and ideas, and deciding on the structure and flow of your post. A well-structured post is easy to read and keeps the reader engaged.

                                When writing your post, it is important to keep in mind your target audience. Who are you writing for? What do they want to know? What tone and style should you use to engage them? These are all important questions to consider when writing your post.

                                In terms of style, it is important to keep your writing clear and concise. Avoid using jargon or technical terms that your readers may not understand. Use simple language and short sentences to convey your ideas.</h5>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
export default FirstPost;


