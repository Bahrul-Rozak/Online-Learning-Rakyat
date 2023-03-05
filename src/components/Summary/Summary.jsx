import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
                      <h1 className="countNumber">3000 </h1>
                      <h4 className="countTitle">Student Worldwide</h4>
                      <hr className="bg-white w-30 h-15" />
                    </Col>

                    <Col>
                      <h1 className="countNumber">3000 </h1>
                      <h4 className="countTitle">Student Worldwide</h4>
                      <hr className="bg-white w-30 h-15" />
                    </Col>

                    <Col>
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
                        <p className="cardSubTitle">Requirement Gathering</p>
                        <p className="cardSubTitle">System Analysis</p>
                        <p className="cardSubTitle">Coding Testing</p>
                        <p className="cardSubTitle">Implementation</p>
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