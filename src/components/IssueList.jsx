import React, {Component} from 'react'
import Issue from './Issue'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import IssueDescription from './IssueDescription'
export default class IssueList extends Component {
    state={
        issues: []
      }
    
      getIssues = async () => {
        const issues = await fetch ('https://api.github.com/repos/facebook/create-react-app/issues')
        const response = issues.json()
        return response
      }
      async componentDidMount () {
        const issues = await this.getIssues()
        console.log(issues)
        this.setState({
          issues: issues
        })
      }
    render () {
        return (
            <Router>
            <Link to="/issues">Issues</Link>
            <Route exact path="/issues">
            <ul>
                {this.state.issues.map((issue, index)=>{
                    return <li key={index}><Issue issue={issue}/></li>
                    })
                }
            </ul>
            </Route>
            <Route path="/issues/:id">
                <IssueDescription issues={this.state.issues}/>
            </Route>
        </Router>
            
        )
    }
}
