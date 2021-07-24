import './Policies.css';
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function Policies() {
    return (
        <div className="Policies">
            <Container>
                <h2>Course Policies</h2>
                <br />
                <Row>
                    <Col sm={6} md={4}>
                        <ListGroup>
                            <ListGroup.Item>Course Objective</ListGroup.Item>
                            <ListGroup.Item>Class Format</ListGroup.Item>
                            <ListGroup.Item>Prerequisites</ListGroup.Item>
                            <ListGroup.Item>Key Learning Outcomes</ListGroup.Item>
                            <ListGroup.Item>Guiding Principles</ListGroup.Item>
                            <ListGroup.Item>Methods of Instruction</ListGroup.Item>
                            <ListGroup.Item>Meeting Frequency</ListGroup.Item>
                            <ListGroup.Item>Grading Policy</ListGroup.Item>
                            <ListGroup.Item>Disclaimer</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={6} md={8}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Policies;
