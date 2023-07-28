import './App.css';

import React, {useState} from 'react'
import Navbar from './Componet 2/Navbar';
import News from './Componet 2/News';
import LoadingBar from 'react-top-loading-bar'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


const App = ()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
      {/* <Router> */}
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <News  pageSize = {15} country = "in" category="Sports" setProgress = {setProgress}/> 
        {/* <News  pageSize = {15} country = "in" category="Health"  setProgress = {this.setProgress}/> */}
        {/* <News  pageSize = {15} country = "in" category="Business" setProgress = {this.setProgress} /> */}
        {/* <News  pageSize = {15} country = "in" category="Entertainment" setProgress = {this.setProgress} /> */}
        {/* <News  pageSize = {15} country = "in" category="General" setProgress = {this.setProgress}/>  */}
        {/* <News  pageSize = {15} country = "in" category="Science"  setProgress = {this.setProgress}/> */}
        {/* <News  pageSize = {15} country = "in" category="Technology" setProgress = {this.setProgress} /> */}


        {/* <Switch>
          <Route exact path="/Science"><News  key = "Science" pageSize = {5} country = "in" category="Science"/></Route>
          <Route exact path="/Business"><News key = "Business"  pageSize = {5} country = "in" category="Business"/></Route>
          <Route exact path="/Sports"><News key = "sports"  pageSize = {5} country = "in" category="sports"/></Route>
          <Route exact path="/Health"><News key = "Health"  pageSize = {5} country = "in" category="Health"/></Route>
          <Route exact path="/technology"><News  key = "technology" pageSize = {5} country = "in" category="technology"/></Route>
          <Route exact path="/Entertainment">  <News key = "Entertainment"  pageSize = {5} country = "in" category="Entertainment"/></Route>
          <Route exact path="/General">  <News  key = "General" pageSize = {5} country = "in" category="General"/></Route>
        </Switch>
        </Router> */}
      </div>
    )
  
}


export default App;