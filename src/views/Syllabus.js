import './Syllabus.css';
import {Button, ButtonGroup, Container, Table} from "react-bootstrap";
import SyllabusContent from "../content/syllabus.json"

function Syllabus() {
    const content = SyllabusContent;

    return (
        <div className="Syllabus">
            <Container>
                <table>
                    <tr>
                        <td style={{width: '100%'}}>
                            <h2><b>CS 198-100</b><br /> Recommendation Systems in Machine Learning</h2><br />
                            University of California, Berkeley<br />
                            Wednesdays 5:30 - 7:00 PM PDT<br />
                            Fall 2021 | 2 Units<br /><br />
                        </td>
                        <td>
                            <a href="https://ml.berkeley.edu/" target="_blank">
                                <img className="mlabLargeLogo" src="/images/sponsors.png" alt="ML@B Logo" />
                            </a>
                        </td>
                    </tr>
                </table>
                <ButtonGroup size="sm">
                    <Button variant="outline-primary" href="https://forms.gle/qjxk7ALqbFCLhTy4A" target="_blank">
                        Enrollment Application
                    </Button>
                    <Button variant="outline-primary" href="https://forms.gle/9EbukMyJEQrB27R69" target="_blank">
                        Audit Form
                    </Button>
                    <Button variant="outline-primary" href="https://piazza.com/class/krgt681dpei5cn" target="_blank">
                        Piazza
                    </Button>
                    <Button variant="outline-primary" href="https://www.gradescope.com/courses/281648" target="_blank">
                        Gradescope
                    </Button>
                </ButtonGroup>
                <hr />

                <h3>Syllabus</h3>
                <br />
                <Table className="syllabusTable">
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Date</th>
                            <th>Topic</th>
                            <th>Lecture</th>
                            <th>Assignment</th>
                            <th>Readings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.map((week, idx) => {
                            const rowspan = (week.readings.length === 0) ? 1 : week.readings.length;
                            const firstReading = (week.readings.length === 0) ? {} : week.readings[0];

                            return [
                                <tr>
                                    <td className="alignVertical alignCenter" rowspan={rowspan}>
                                        <b style={{fontSize: '24px'}}>{week.week}</b>
                                    </td>
                                    <td className="alignVertical alignCenter" rowspan={rowspan}>
                                        <b>{week.date}</b>
                                    </td>
                                    <td className="alignVertical" rowspan={rowspan}>
                                        {week.topic}
                                    </td>
                                    <td className="fullRowText" rowspan={rowspan}>
                                        {week.lectureLink && (
                                            <a href={week.lectureLink} target="_blank">Lecture {idx+1}</a>
                                        )}
                                    </td>
                                    <td rowspan={rowspan}>{week.assignmentName}</td>
                                    <td>{firstReading.title}</td>
                                </tr>,
                                week.readings.slice(1).map(reading => (
                                    <tr>
                                        <td>{reading.title}</td>
                                    </tr>
                                ))
                            ];
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default Syllabus;
