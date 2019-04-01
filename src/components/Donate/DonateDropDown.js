import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { value: 'American Cancer Society', text: 'American Cancer Society' },
  { value: 'Survivor Journeys', text: 'Survivor Journeys' },
  { value: 'Doctors Without Borders', text: 'Doctors Without Borders' },

]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder='Select a Charity'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownExampleSearchSelection
