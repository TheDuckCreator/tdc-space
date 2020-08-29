import React from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Page/Home'
import Content from './Page/Content'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import coverPhoto from './Asset/cover.png'
import About from './Page/About'
function App() {
  return (
    <div>
      <Helmet>
        <title>TDC-Space</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="เพราะเราเชื่อว่าการแสดงออกมาจะทำให้สถานการณ์ดีกว่าการที่มีใครบางคนต้องเจ็บ
 และเชื่อเรื่องการเปิดใจรับฟังคือพื้นฐานของการอยู่ร่วมกัน"
        />
        <meta property="og:title" content="TDC-Space" />
        <meta property="og:type" content="text/html" />
        <meta property="og:url" content="http://space.theduckcreator.in.th" />
        <meta property="og:image" content={coverPhoto} />
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route path="/category"></Route>

          <Route path="/content/:id">
            <Content />
          </Route>

          <Route path="/about">
            <About />
          </Route>

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
