import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class EstTotal extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <h2>Estimated Total</h2>
        </Col>
        <Col md={6}>
          <h2>{`$${this.props.price}`}</h2>
        </Col>
      </Row>
    )
  }
}
