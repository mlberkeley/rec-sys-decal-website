import './Instructors.css';
import InstructorsContent from "../content/instructors.json";
import {Container, Row, Col, Card, Badge} from "react-bootstrap";
import {Link45deg as LinkIcon} from "react-bootstrap-icons";

function Instructors() {
    const content = InstructorsContent;

    return (
        <div className="Instructors">
            <Container>
                <h2>Course Staff</h2>
                <br />
                <p>If you have any questions or need clarifications about assignments, lectures, grading, or the course content, please setup a post on <b>Piazza</b> (privately, if the information is sensitive). If you have questions/feedback about the course overall, please email <a href="mailto:recsys.fa21@gmail.com">recsys.fa21@gmail.com</a>. <b>Please do not email us individually.</b></p>
                <hr />
                <Row xs={1} md={2} lg={3} className="g-4">
                    {content.map(person => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <div className="centerContent">
                                        <img className="personImg" src={"/rec-sys-decal-website/" + person.imagePath || "/rec-sys-decal-website/images/blankpfp.png"} alt={person.name} />
                                    </div>
                                    <h3 style={{textAlign: 'center'}}>{person.name}</h3>
                                    <div className="centerContent">
                                        <Badge bg="secondary">{person.role}</Badge>{' '}
                                        <a href={person.link} target="_blank" rel="noreferrer">
                                            <Badge bg="primary">
                                                <LinkIcon />
                                            </Badge>
                                        </a>
                                    </div>
                                    <br />
                                    <p style={{fontSize: '14px'}}>{person.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <br />
            <br />
        </div>
    );
}

export default Instructors;
