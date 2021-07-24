import './Policies.css';
import {Col, Container, ListGroup, Row, Table} from "react-bootstrap";
import {
    CameraVideo,
    CheckCircle,
    Clock,
    Compass,
    ExclamationCircle,
    FileText,
    ListTask,
    Pencil,
    People
} from "react-bootstrap-icons";

function Policies() {
    return (
        <div className="Policies">
            <Container>
                <h2>Course Policies</h2>
                <Row>
                    <Col sm={4}>
                        <ListGroup style={{paddingTop: '75px'}} className="sticky-top">
                            <ListGroup.Item action href="#courseObjective"><Compass /> Course Objective</ListGroup.Item>
                            <ListGroup.Item action href="#classFormat"><People /> Class Format</ListGroup.Item>
                            <ListGroup.Item action href="#prerequisites"><ListTask /> Prerequisites</ListGroup.Item>
                            <ListGroup.Item action href="#keyLearningOutcomes"><Pencil /> Key Learning Outcomes</ListGroup.Item>
                            <ListGroup.Item action href="#guidingPrinciples"><FileText /> Guiding Principles</ListGroup.Item>
                            <ListGroup.Item action href="#methodsOfInstruction"><CameraVideo /> Methods of Instruction</ListGroup.Item>
                            <ListGroup.Item action href="#meetingFrequencyAndTimes"><Clock /> Meeting Frequency & Times</ListGroup.Item>
                            <ListGroup.Item action href="#gradingPolicy"><CheckCircle /> Grading Policy</ListGroup.Item>
                            <ListGroup.Item action href="#disclaimer"><ExclamationCircle /> Disclaimer</ListGroup.Item>
                        </ListGroup>
                        <br />
                    </Col>
                    <Col className="policiesContent" sm={8}>
                        <div id="courseObjective"></div>
                        <h3>Course Objective</h3>
                        <p>In this course, you will learn how Big Tech (Facebook, TikTok, Amazon, Netflix, YouTube, etc.) develops content/product recommendation systems to provide customized experiences, increase engagement, and drive up customer satisfaction. Content-based, collaborative, knowledge-based, session-based, deep learning-based, and reinforcement learning-based systems will be explored. We’ll also delve into scoring, re-ranking, evaluation, deployment, ethics, decision-making psychology, and adversarial attacks. For each topic, we’ll cover definitions, reference papers, explore classical methods, look at current research, and list open questions. Lying at the intersection of machine learning and business, this course will be application-focused while prioritizing mathematical/technical rigor.</p>

                        <div id="classFormat"></div>
                        <h3>Class Format</h3>
                        <p>Small-group work sessions, personalized instructor mentors, and weekly lectures.</p>

                        <div id="prerequisites"></div>
                        <h3>Prerequisites</h3>
                        <p>While no prerequisites are enforced, we recommend:</p>
                        <ul>
                            <li><a href="https://cs61a.org/" target="_blank" rel="noreferrer">CS 61A</a> (Structure and Interpretation of Computer Programs) or equivalent programming experience. This is because the course will have Python-based programming assignments.</li>
                            <li><a href="https://eecs16a.org/" target="_blank"  rel="noreferrer">EECS 16A</a> (Designing Information Systems & Devices I) or <a href="https://math.berkeley.edu/courses/choosing/lowerdivcourses/math54" target="_blank" rel="noreferrer">Math 54</a> (Linear Algebra & Differential Equations) or equivalent linear algebra experience. Some of the papers and algorithms we reference will require familiarity with elementary linear algebra.</li>
                            <li>Prior machine learning experience in classes like <a href="https://inst.eecs.berkeley.edu/~cs188" target="_blank" rel="noreferrer">CS 188</a> (Introduction to Artificial Intelligence) and <a href="https://www.eecs189.org/" target="_blank" rel="noreferrer">CS 189</a> (Introduction to Machine Learning) isn't required but may be useful.</li>
                        </ul>

                        <div id="keyLearningOutcomes"></div>
                        <h3>Key Learning Outcomes</h3>
                        <ul>
                            <li>Understand the academic and business-oriented background of common uses of machine-learning based recommendation systems</li>
                            <li>Learn to select, adapt, and implement machine learning models for a specific problem</li>
                            <li>Develop the intuition and insight necessary to effectively work within the space of ML in business and produce novel results in the field</li>
                        </ul>

                        <div id="guidingPrinciples"></div>
                        <h3>Guiding Principles</h3>
                        <ul>
                            <li>
                                Create a unified environment for simulating recommendation systems tasks in industry
                                <ul>
                                    <li>Reduces the programming proficiency required to create machine learning pipelines</li>
                                    <li>Students benefit from familiarity with the system over the entire duration of the course</li>
                                    <li>Allows for easy grading and instant feedback</li>
                                </ul>
                            </li>
                            <li>
                                Work on establishing machine learning techniques from a data-centric point of view
                                <ul>
                                    <li>Creates a black box abstraction that exposes only the necessary details and behavior of each model</li>
                                    <li>Accentuates the ML side of the task instead of the programming/mathematical side of the task</li>
                                    <li>Emphasizes the business/psychology context that guides machine learning decisions</li>
                                    <li>Lowers the barrier of entry for students unfamiliar with advanced mathematics and programming techniques required to understand the behind-the-scenes of ML models</li>
                                </ul>
                            </li>
                            <li>
                                Make heavy use of available online resources
                                <ul>
                                    <li>Helps with instructor efficiency as resources can be shared more easily with students using version control systems (Git) and recorded lectures (Zoom), as well as the fact that online auto-graders can be used</li>
                                    <li>The course can be later repeated if there is interest with little effort by reusing material, or published online as a self-guided class</li>
                                </ul>
                            </li>
                        </ul>

                        <div id="methodsOfInstruction"></div>
                        <h3>Methods of Instruction</h3>
                        <ul>
                            <li>Lectures, interactive & conceptual homework assignments (with coding portions)</li>
                            <li>Group work highly recommended (group size 2-4 people). Groups can submit assignments for a shared grade</li>
                            <li>80 min online lecture to go over context, available models, and homework assignments</li>
                            <li>50 min online office hours for conceptual questions and help with homework assignments</li>
                            <li>Industry simulations where students will be asked to make recommendation system design decisions</li>
                        </ul>

                        <div id="meetingFrequencyAndTimes"></div>
                        <h3>Meeting Frequency & Times</h3>
                        <ul>
                            <li>Online lecture once per week on Wednesdays from 5:30 - 7:00 PM PDT (starts at Berkeley Time, aka 5:40 PM)</li>
                            <li>Online office hours once per week on <b>TBD</b></li>
                        </ul>

                        <div id="gradingPolicy"></div>
                        <h3>Grading Policy</h3>
                        <p>Students must take this course as Pass/No Pass (P/NP), and need at least a <code>70%</code> in the class to get a Pass (P). Here are the assignment categories:</p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Weight</th>
                                    <th className="fullRowText">Time (per week)</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="alignVertical">Homeworks</td>
                                    <td className="number">40%</td>
                                    <td className="number">3 hr</td>
                                    <td>
                                        Online submission of assignments using GitHub, email, or an autograder (depending on assignment). Homework is graded with leniency and an emphasis on conceptual understanding rather than model performance.
                                        <ul>
                                            <li>2 free homework drops allowed in the semester</li>
                                            <li>Due by the start of lecture</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="alignVertical">Quizzes</td>
                                    <td className="number">30%</td>
                                    <td className="number">10 min</td>
                                    <td>
                                        Weekly short open-book multiple choice forms based on lecture content to ensure that students are following the course (graded on % correct).
                                        <ul>
                                            <li>Each quiz graded on a curve:<br /><code>final_score = min(original_score / 0.9, 1)</code></li>
                                            <li>Due usually 10-20 minutes after the start of lecture</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="alignVertical">Participation</td>
                                    <td className="number">30%</td>
                                    <td className="number">1.5 hr</td>
                                    <td>
                                        Attendance to online lecture and participation in questions asked during class (graded based on effort rather than correctness in answering questions).
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <div id="disclaimer"></div>
                        <h3>Disclaimer</h3>
                        <p>This syllabus may be subject to change.</p>

                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Policies;
