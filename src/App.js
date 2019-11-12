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
import Post from './components/Post';
import Write from './components/Write';

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
          <Route exact path="/politics" component={Politics}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/:cate/:postId" component={Post}/>
          <Route exact path="/:cate/write" component={Write}/>
      </div>
    </Router>
  );
}

export default App;
