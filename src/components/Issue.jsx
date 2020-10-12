import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import "bulma/css/bulma.css"
import {Box, Content, Tag} from 'bloomer'


const Issue = (props) => {
    const {url} = useRouteMatch()
    return (
        <>
            <Box>
                <Content>
                    <h1>{props.issue.title}</h1>
                    <Link to={`${url}/${props.issue.number}`}>Explore Issue: {props.issue.number}</Link>
                    <p>{props.issue.body.slice(0,256)}<span><Tag isColor='success'>{props.issue.state}</Tag></span></p>
                </Content>
            </Box>
        </>
    )
}

export default Issue