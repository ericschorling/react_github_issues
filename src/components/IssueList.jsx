import React, {useEffect, useState} from 'react'
import Issue from './Issue'
import {Title, Container} from 'bloomer'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import IssueDescription from './IssueDescription'
import 'bulma/css/bulma.css'




const IssueList = props => {
  const [issues, setIssues] = useState([]);
  useEffect(()=>  {
    (async function () {
      const response = await fetch ('https://api.github.com/repos/facebook/create-react-app/issues')
      const issues = await response.json()
      setIssues(issues)
    })();
  }, [setIssues])
  return (
    <Router>
      <Link to="/issues">Issues</Link>
      <Route exact path="/issues">
        <Title isSize={2}>Github Issues List</Title>
        <ul>
            {!!issues.length ? issues.map((issue, index)=>{
                return <li key={issue.id}><Issue issue={issue}/></li>
                })
            : (
              <p>No Issues</p>
            )}
        </ul>
      </Route>
      <Route path="/issues/:id">
          <IssueDescription issues={issues}/>
      </Route>
      <Route path="*">
        <h1>Oops nothing here</h1>
      </Route>
  </Router>
  )
}

export default IssueList
