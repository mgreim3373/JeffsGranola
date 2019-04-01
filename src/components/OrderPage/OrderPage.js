import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import OrderDropDown from './OrderDropDown'
import {Animated} from "react-animated-css";
import DropdownExampleSearchSelection from '../Donate/DonateDropDown'

const OrderPage = (props) => {

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <h1> {props.location.state.selectedProduct.selectedProduct}</h1>
      <Container className="ui segment centered">
        <Form>
          <Form.Field>
            <label>Size</label>
            <OrderDropDown/>
          </Form.Field>
          <Form.Field>
            <label>Nonprofit Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Nonprofit EIN#</label>
            <input placeholder='EIN#' />
          </Form.Field>
          <Form.Field>
            <label>Or Select Charity</label>
            <DropdownExampleSearchSelection/>
          </Form.Field>
          <Button color='red' type='submit'>Buy</Button>
        </Form>
      </Container>
    </Animated>
  )
}

export default OrderPage
