import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import DropdownExampleSearchSelection from './DonateDropDown'
import {Animated} from "react-animated-css";

const Donate = () => (
  <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
  <Container className="ui segment centered">
    <Form>
      <Form.Field>
        <label>Proof of Purchase#</label>
        <input placeholder='Proof of Purchase' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
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
      <Button color='red' type='submit'>Submit</Button>
    </Form>
  </Container>
  </Animated>
)

export default Donate
