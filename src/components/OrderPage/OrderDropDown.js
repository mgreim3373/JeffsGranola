import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const productOption = [
  { value: 'Small', text: 'Small' },
  { value: 'Medium', text: 'Medium' },
  { value: 'Large', text: 'Large' },

]

const OrderDropDown = () => (
  <Dropdown
    placeholder='Size'
    fluid
    search
    selection
    options={productOption}
  />
)

export default OrderDropDown
