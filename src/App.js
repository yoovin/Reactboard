import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from './routes/Home'
import About from './routes/About'
import Nav from './components/Nav';
import Header from './components/Header';
import Free from './routes/Free'
import Hobby from './routes/Hobby'
import Politics from './routes/politics'
import News from './routes/News'

function App() {
  return (
    <Router>
      <div>
          <Route path="/" component={Nav} />
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/free" component={Free}/>
          <Route exact path="/hobby" component={Hobby}/>
          <Route path="/politics" component={Politics}/>
          <Route path="/news" component={News}/>
      </div>
    </Router>
  );
}

export default App;
