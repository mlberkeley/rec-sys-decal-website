import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Policies from "./views/Policies";
import Syllabus from "./views/Syllabus";
import Instructors from "./views/Instructors";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar className="fixed-top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            Rec Sys in ML
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link href="/">
                                    Syllabus
                                </Nav.Link>
                                <Nav.Link href="/policies">Course Policies</Nav.Link>
                                <Nav.Link href="/staff">Course Staff</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="ghostNavbar" />

                <Switch>
                    <Route path="/policies">
                        <Policies />
                    </Route>
                    <Route path="/staff">
                        <Instructors />
                    </Route>
                    <Route path="/">
                        <Syllabus />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
