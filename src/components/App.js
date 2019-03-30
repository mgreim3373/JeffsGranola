import React from 'react'
import Logo from './Logo/Logo'
import Error from './Error/Error'
import Navigation from './Navigation/Navigation'
import Locations from './Locations/Locations'
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends React.Component {
  state = { logoAnimationComplete: false }

  render() {
    return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={ Logo } exact/>
          <Route path="/locations" component={ Locations }/>
          <Route component={ Error }/>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App
