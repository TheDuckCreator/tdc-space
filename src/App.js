import React from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Page/Home'
import Content from './Page/Content'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/category"></Route>

          <Route path="/content/:id">
            <Content />
          </Route>

          <Route path="/about"></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
