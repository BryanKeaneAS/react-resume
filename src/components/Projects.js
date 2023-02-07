import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Payroll from "../assets/img/payroll.png";
import HMS from "../assets/img/HMS.png";
import Phonebook from "../assets/img/phonebook.png";
import Iot from "../assets/img/Iot.png";
import HouseAttr from "../assets/img/house-attrition.jpg";
import HRanalysis from "../assets/img/HR-analytics.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard.js';

export const Projects = () => {
    const projects1 = [
        {
            title: "Payroll Management System",
            description: "Management System",
            imgUrl: Payroll,
        },
        {
            title: "Hospital Management System",
            description: "Management System",
            imgUrl: HMS,
        },
        {
            title: "Phonebook Application",
            description: "Management System",
            imgUrl: Phonebook,
        },
    ];
    const projects2 = [
        {
            title: "Humidity Measurement ThingSpeak",
            description: "Data Analytics",
            imgUrl: Iot,
        },
        {
            title: "House Price Recommendation",
            description: "Data Analytics",
            imgUrl: HouseAttr,
        },
        {
            title: "IBM Employee Attrition HR Analytics",
            description: "Data Analytics",
            imgUrl: HRanalysis,
        },
    ];
    const projects3 = [
        {
            title: "Humidity Measurement ThingSpeak",
            description: "Web Design",
            imgUrl: projImg1,
        },
        {
            title: "House Price Recommendation",
            description: "Web Design",
            imgUrl: projImg2,
        },
        {
            title: "IBM Employee Attrition HR Analytics",
            description: "Web Design",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__jello" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sit veniam quos eaque dolorem rem ea placeat corporis, fuga sequi optio atque voluptatibus, iure excepturi!</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Management System</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Data Analytics</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Web Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}