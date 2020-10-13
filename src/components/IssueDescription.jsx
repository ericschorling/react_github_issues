import React from 'react'
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
const IssueDescription = props => {
    const {id} = useParams()
    let theIssue;
    console.log(props.issues, id)
    for(let i = 0; i < props.issues.length; i++){
        if (Number(id) === props.issues[i].number){
            theIssue = i
            console.log(theIssue)
        }
    }
    const issue = props.issues[theIssue]
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
            <h1>{issue.title}</h1>
            <p>Status: {issue.state}</p>
            <p>Created: {issue.created_at}</p>
            <ReactMarkdown source={issue.body} escapeHtml={false}></ReactMarkdown>
        </div>
    )
}

export default IssueDescription