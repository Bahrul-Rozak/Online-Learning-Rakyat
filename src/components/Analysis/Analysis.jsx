import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Technology: "PHP",
          Projects: 100,
        },
        {
          Technology: "MySQL",
          Projects: 90,
        },
        {
          Technology: "Laravel",
          Projects: 80,
        },
        {
          Technology: "ReactJS",
          Projects: 70,
        },
        {
          Technology: "Vue JS",
          Projects: 60,
        },
        {
          Technology: "JavaScript",
          Projects: 100,
        },
        {
          Technology: "Vue JS",
          Projects: 60,
        },
        {
          Technology: "JavaScript",
          Projects: 100,
        },
      ],
    };
  }

  render() {
    const blue = "#051b35";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="analysisMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey={"Technology"} />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
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
