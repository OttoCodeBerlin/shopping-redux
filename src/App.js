import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Subtotal from './components/Subtotal'
import PickupSavings from './components/PickupSavings'
import TaxesFees from './components/TaxesFees'
import EstTotal from './components/EstTotal'
import ItemDetails from './components/ItemDetails'
import PromoCode from './components/PromoCode'

import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subtotal: 100,
      pickupSavings: -3.85,
      taxes: 0,
      total: 100,
      disabledPromoButton: false,
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.subtotal + this.state.pickupSavings) * 0.0875,
      },
      function () {
        this.setState({
          total: this.state.subtotal + this.state.pickupSavings + this.state.taxes,
        })
      }
    )
  }

  giveDiscountHandler=()=> {
    if (this.props.promoCode === 'DISCOUNT666') {
      this.setState({
        total: this.state.total*0.9
      },
      function() {
        this.setState({
          disabledPromoButton: true
        })
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.subtotal.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstTotal price={this.state.total.toFixed(2)} />
          <br />
          <ItemDetails price={this.state.total.toFixed(2)} />
          <hr />
          <PromoCode giveDiscount={() => this.giveDiscountHandler()} isDisabled={this.state.disablePromoButton} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value,
})

export default connect(mapStateToProps, { handleChange })(App)
