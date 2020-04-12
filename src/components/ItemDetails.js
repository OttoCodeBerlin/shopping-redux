import React, { Component } from 'react'
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap'

export default class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} Item Details
          {this.state.open === false ? ` +` : ` -`}{' '}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                className="m-3"
                src="https://i5.walmartimages.com/asr/c6debe73-ce33-4c56-935b-d718be5046ad_1.245303aeb0df89657bb70125ee5fac11.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                alt="Thumbnail"
              />

              {
                <Media.Body>
                  <br />
                  <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Pink</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> Qty: 1</Col>
                  </Row>
                </Media.Body>
              }
            </Media>
          </div>
        </Collapse>
      </div>
    )
  }
}
