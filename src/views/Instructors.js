import './Instructors.css';
import InstructorsContent from "../content/instructors.json";
import {Card, Col, Container, Row} from "react-bootstrap";

function Instructors() {
    const content = InstructorsContent;
    return (
        <div className="Instructors">
            <Container>
                <h3>Instructors</h3>
                <br />
                <Row xs={1} md={2} lg={3} className="g-4">
                    {content.map(person => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={person.imagePath} />
                                <Card.Body>
                                    <Card.Title><a href={person.link} target="_blank">{person.name}</a></Card.Title>
                                    <Card.Text style={{fontSize: '14px'}}>{person.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Instructors;
