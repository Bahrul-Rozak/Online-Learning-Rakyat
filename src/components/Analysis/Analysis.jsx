import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Analysis extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="analysisMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <h1>Bar Chart</h1>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify analysisDescription">
                All the components of Recharts are clearly separated. The
                lineChart is composed of x axis, tooltip, grid, and line items,
                and each of them is an independent React Component. The clear
                separation and composition of components is one of the principle
                Recharts follows. All the components of Recharts are clearly
                separated. The lineChart is composed of x axis, tooltip, grid,
                and line items, and each of them is an independent React
                Component. The clear separation and composition of components is
                one of the principle Recharts follows.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
