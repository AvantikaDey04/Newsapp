import './App.css';
import New from './Components/New';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey='49e7bdcdcc874a4b96bb0a0edfa7edc5'
  state={
      progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exact path="/" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} country="us" category="business" />} />
            <Route exact path="/business" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="general" ageSize={5} country="us" category="general" />} />
            <Route exact path="/health" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} country="us" category="health" />} />
            <Route exact path="/science" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} country="us" category="science" />} />
            <Route exact path="/sports" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} country="us" category="sports" />} />
            <Route exact path="/technology" element={<New setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
