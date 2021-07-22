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
                    <Navbar.Brand>
                        Rec Sys in ML
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">Syllabus</Nav.Link>
                            <Nav.Link href="/policies">Policies</Nav.Link>
                            <Nav.Link href="/instructors">Instructors</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="ghostNavbar"></div>

            <Switch>
                <Route path="/policies">
                    <Policies />
                </Route>
                <Route path="/instructors">
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
