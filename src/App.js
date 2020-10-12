import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import IssueList from './components/IssueList'
import './App.css';
import IssueDescription from './components/IssueDescription';


const App =(props) => {
  
    return (
      <div className="App">
        <IssueList />
      </div>
    );
  
}

export default App;
