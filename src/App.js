import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import CocktailIndex from './Components/Cocktails/cocktailindex'
import Navbar from './Components/common/Nav'
import CocktailShow from './Components/Cocktails/CocktailShow'



function App() {



  return (
    <BrowserRouter>
      <Navbar />

      <Switch>

        <Route path="/cocktails/:id">
          <CocktailShow />
        </Route>

        <Route path="/cocktails">
          <CocktailIndex />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </BrowserRouter>
  )
}

export default App
