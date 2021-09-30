import './Syllabus.css';
import React from "react";
import {Button, ButtonGroup, Container, Table} from "react-bootstrap";
import {Link45deg as LinkIcon} from "react-bootstrap-icons";
import SyllabusContent from "../content/syllabus.json";
import AnnouncementsContent from "../content/announcements.json";

class Syllabus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
        this.content = SyllabusContent;
        this.maxPage = AnnouncementsContent.length;
        this.announcements = AnnouncementsContent;

        this.announcementsBack = this.announcementsBack.bind(this);
        this.announcementsForward = this.announcementsForward.bind(this);
    }

    announcementsBack() {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            });
        }
    }

    announcementsForward() {
        if (this.state.page < this.maxPage) {
            this.setState({
                page: this.state.page + 1
            });
        }
    }

    render() {
        return (
            <div className="Syllabus">
                <Container>
                    <table>
                        <tr>
                            <td style={{width: '100%'}}>
                                <h2><b>CS 198-100</b><br /> Recommendation Systems in Machine Learning</h2><br />

                                <b>Instructors:</b> Arvind Rajaraman, Andre He, Emi Tran, Sid Ijju, Max Smolin, Arjun Sripathy<br />
                                <b>Faculty Sponsor:</b> Anca Dragan<br /><br />

                                University of California, Berkeley<br />
                                Wednesdays 5:30 - 7:00 PM PDT<br />
                                Fall 2021 | 2 Units<br /><br />
                            </td>
                            <td>
                                <a href="https://ml.berkeley.edu/" target="_blank" rel="noreferrer">
                                    <img className="mlabLargeLogo" src="/rec-sys-decal-website/images/sponsors.png" alt="ML@B Logo" />
                                </a>
                            </td>
                        </tr>
                    </table>
                    <ButtonGroup size="sm">
                        <Button variant="outline-primary" href="https://forms.gle/qjxk7ALqbFCLhTy4A" target="_blank" rel="noreferrer">
                            Enrollment Application
                        </Button>
                        <Button variant="outline-primary" href="https://forms.gle/9EbukMyJEQrB27R69" target="_blank" rel="noreferrer">
                            Audit Form
                        </Button>
                        <Button variant="outline-primary" href="https://piazza.com/class/krgt681dpei5cn" target="_blank" rel="noreferrer">
                            Piazza
                        </Button>
                        <Button variant="outline-primary" href="https://www.gradescope.com/courses/281648" target="_blank" rel="noreferrer">
                            Gradescope
                        </Button>
                    </ButtonGroup>
                    <br /><br/>
                    <p>In this course, you will learn how Big Tech (Facebook, TikTok, Amazon, Netflix, YouTube, etc.) develops content/product recommendation systems to provide customized experiences, increase engagement, and drive up customer satisfaction. We explore content-based and collaborative filtering paradigms, architectures using statistical methods, deep learning, CNNs, autoencoders, RNNs, Transformers, GANs, and deep RL. We’ll also delve into scoring, re-ranking, evaluation, deployment, ethics, decision-making psychology, and adversarial attacks. For each topic, we’ll cover definitions, reference papers, explore classical methods, look at current research, and list open questions. Lying at the intersection of machine learning and business, this course will be application-focused while prioritizing mathematical/technical rigor.</p>
                    <hr />
                    <h3>Announcements</h3>
                    <ButtonGroup size="sm">
                        <Button variant="outline-primary" onClick={this.announcementsBack} disabled={this.state.page === 1 ? "disabled": ""}>&lt; Next Week</Button>
                        <Button variant="outline-primary" onClick={this.announcementsForward} disabled={this.state.page === this.maxPage ? "disabled": ""}>Previous Week &gt;</Button>
                    </ButtonGroup>
                    <br /><br />
                    <h5>{this.announcements[this.state.page - 1].date}</h5>
                    <p>{this.announcements[this.state.page - 1].announcement}</p>

                    <hr />
                    <h3>Syllabus</h3>
                    <p><b>Note:</b> This syllabus may be subject to change. All assignments are due on the date listed at 11:59 PM.</p>
                    <br />
                    <Table className="syllabusTable">
                        <thead>
                        <tr>
                            <th className="alignCenter">Week</th>
                            <th className="alignCenter">Date</th>
                            <th className="alignCenter">Topic</th>
                            <th className="alignCenter">Lecture</th>
                            <th className="alignCenter">Quiz</th>
                            <th className="alignCenter">Assignment</th>
                            <th className="alignCenter">Readings</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.content.map((week, idx) => {
                            const rowspan = (week.readings.length === 0) ? 1 : week.readings.length;

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
                                    <td className="fullRowText alignVertical alignCenter" rowspan={rowspan}>
                                        {week.lectureLink && (
                                            <span>
                                                Lecture{' '}
                                                <a href={week.lectureLink} target="_blank" rel="noreferrer">
                                                    <LinkIcon />
                                                </a>
                                                <br />
                                            </span>
                                        )}
                                        {week.slidesLink && (
                                            <span>
                                                Slides{' '}
                                                {week.slidesLink && (
                                                    <a href={week.slidesLink} target="_blank" rel="noreferrer">
                                                        <LinkIcon />
                                                    </a>
                                                )}
                                                <br />
                                            </span>
                                        )}
                                    </td>
                                    <td className="fullRowText alignVertical alignCenter" rowspan={rowspan}>
                                        {week.quizLink && (
                                            <span>
                                                Quiz{' '}
                                                <a href={week.quizLink} target="_blank" rel="noreferrer">
                                                    <LinkIcon />
                                                </a>
                                                <br />
                                                <span style={{fontWeight: '300', fontSize: '14px'}}>due {week.quizDueDate}</span>
                                            </span>
                                        )}
                                    </td>
                                    <td className="alignVertical alignCenter" rowspan={rowspan}>
                                        {week.assignment && (
                                            <span>
                                                {week.assignment.name}{' '}
                                                {week.assignment.link && (
                                                    <a href={week.assignment.link} target="_blank" rel="noreferrer">
                                                        <LinkIcon />
                                                    </a>
                                                )}
                                                <br />
                                                <span style={{fontWeight: '300', fontSize: '14px'}}>due {week.assignment.dueDate}</span>
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        {week.readings.length > 0 && (
                                            <span>
                                                {week.readings[0].title}{' '}
                                                <a href={week.readings[0].link} target="_blank" rel="noreferrer">
                                                    <LinkIcon />
                                                </a>
                                                <br />
                                                <span style={{fontWeight: '300'}}>by {week.readings[0].author} ({week.readings[0].year})</span>
                                            </span>
                                        )}
                                    </td>
                                </tr>,
                                week.readings.slice(1).map(reading => (
                                    <tr>
                                        <td>
                                            <span>
                                                {reading.title}{' '}
                                                <a href={reading.link} target="_blank" rel="noreferrer">
                                                    <LinkIcon />
                                                </a>
                                                <br />
                                                <span style={{fontWeight: '300'}}>by {reading.author} ({reading.year})</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ];
                        })}
                        </tbody>
                    </Table>
                </Container>
                <br />
            </div>
        );
    }
}

export default Syllabus;
