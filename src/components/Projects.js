import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/TheLabAcademy.png";
import projImg2 from "../assets/img/Infinitecut.png";
import projImg3 from "../assets/img/project1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "The Lab Academy",
      description: "Application web React JS",
      imgUrl: projImg1,
      links: [
        { label: "Site web", url: "https://thelab-academy.fr/" }
      ]
    },
    {
      title: "Infinitecut",
      description: "Application mobile React Native",
      imgUrl: projImg2,
      links: [
        { label: "Frontend GitHub", url: "https://github.com/FelixNamb/InfiniteCut-Frontend" },
        { label: "Backend GitHub", url: "https://github.com/FelixNamb/InfiniteCut-Backend" }
      ]
    },
    {
      title: "Project 3",
      description: "Todolist, chronomètre, géolocalisation",
      imgUrl: projImg3,
      links: [
        { label: "GitHub", url: "https://github.com/Ramy-Ch/HelloWorld" }
      ]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projets</h2>
                  <p>Les projets sur lesquels j'ai pu travailler à ce jour 🤓</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">The Lab Academy</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Infinitecut</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">TodoList</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <ProjectCard {...projects[2]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
