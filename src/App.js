import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from './routes/Home'
import Humor from './routes/Humor'
import Nav from './routes/Nav';
import Header from './routes/Header';
import Free from './routes/Free'
import Hobby from './routes/Hobby'
import Politics from './routes/Politics'
import News from './routes/News'
import Post from './routes/Post';
import Write from './routes/Write';

function App() {
  return (
    <Router>
      <div>
          <Route path="/" component={Nav} />
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/humor" component={Humor} />
          <Route exact path="/free" component={Free}/>
          <Route exact path="/hobby" component={Hobby}/>
          <Route exact path="/politics" component={Politics}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/:cate/post/:postId" component={Post}/>
          <Route exact path="/:cate/write" component={Write}/>
      </div>
    </Router>
  );
}

export default App;
