import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe, faLaptop, faStar } from "@fortawesome/free-solid-svg-icons";

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <FontAwesomeIcon icon={faGlobe} className="iconProject" />
                      <h1 className="countNumber">3000 </h1>
                      <h4 className="countTitle">Student Worldwide</h4>
                      <hr className="bg-white w-30 h-15" />
                    </Col>

                    <Col>
                      <FontAwesomeIcon
                        icon={faLaptop}
                        className="iconProject"
                      />
                      <h1 className="countNumber">3000 </h1>
                      <h4 className="countTitle">Student Worldwide</h4>
                      <hr className="bg-white w-30 h-15" />
                    </Col>

                    <Col>
                      <FontAwesomeIcon icon={faStar} className="iconProject" />
                      <h1 className="countNumber">3000 </h1>
                      <h4 className="countTitle">Student Worldwide</h4>
                      <hr className="bg-white w-25 h-15" />
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What I Have Achieved
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />
                          Requirement Gathering
                        </p>
                        <p className="cardSubTitle">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />
                          System Analysis
                        </p>
                        <p className="cardSubTitle">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />
                          Coding Testing
                        </p>
                        <p className="cardSubTitle">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            className="iconBullet"
                          />
                          Implementation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
