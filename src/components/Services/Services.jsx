import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../asset/image/design.png";
import ecommerceIcon from "../../asset/image/ecommerce.png";
import webIcon from "../../asset/image/web.png";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY SERVICES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="designIcon"
                  src={designIcon}
                  alt="design-icon"
                />
                <h2 className="serviceName">Web Design</h2>
                <p className="serviceDescription">
                  Qualified web design and attractive effects which catches
                  visitor's eye
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="ecommerceIcon"
                  src={ecommerceIcon}
                  alt="ecommerce-icon"
                />
                <h2 className="serviceName">E-Commerce</h2>
                <p className="serviceDescription">
                  I will design and develop ecommerce online store website
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="webIcon" src={webIcon} alt="web-icon" />
                <h2 className="serviceName">Web Development</h2>
                <p className="serviceDescription">
                  Clean and issues free code to make your website dynamic
                  perfectly
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
