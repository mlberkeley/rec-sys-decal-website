import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {HashRouter as Router, Switch, Route, NavLink, Redirect} from "react-router-dom";
import Policies from "./views/Policies";
import Syllabus from "./views/Syllabus";
import Instructors from "./views/Instructors";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar className="fixed-top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <NavLink className="navLink brand" to="/syllabus">Rec Sys in ML</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link>
                                    <NavLink className="navLink" to="/syllabus" activeClassName="active">Syllabus</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="navLink" to="/policies" activeClassName="active">Policies</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="navLink" to="/staff" activeClassName="active">Staff</NavLink>
                                </Nav.Link>
                                <Nav.Link className="navLink" href="https://ml.berkeley.edu" target="_blank" rel="noreferrer">
                                    ML@B
                                </Nav.Link>
                                <Nav.Link className="navLink" href="https://eecs.berkeley.edu" target="_blank" rel="noreferrer">
                                    EECS
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="ghostNavbar" />

                <Switch>
                    <Route exact path="/syllabus">
                        <Syllabus />
                    </Route>
                    <Route exact path="/policies">
                        <Policies />
                    </Route>
                    <Route exact path="/staff">
                        <Instructors />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/syllabus" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
