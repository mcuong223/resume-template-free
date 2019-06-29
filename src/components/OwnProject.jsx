import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import {Divider} from '@material-ui/core';
import {color} from '../contents/customize'

const OwnProject = ({ data }) => {
    const classes = makeStyles({
        
    })();
    if (!data) return null;
    return (
        <Fragment>
            <Card style={{color: 'inherit'}}>
                <CardContent>
                <p className="card-title">
                    Own projects
                </p>
                {data.map((i, index)=>{
                    return(
                        <Item data={i} key={i.title + index} last={index==data.length-1}/>
                    )
                })}
                </CardContent>
            </Card>
        </Fragment>
    )
}

const Item = ({data, last}) => {
    let {title, subtitle, summary, link, thumbnailUrl} = data;
    const classes = makeStyles({
        container: {
            padding: '1rem 1rem 2rem',
            fontSize: '1.25rem',
            position: 'relative',
            '& img': {
                width: '90%',
                margin: 'auto',
                border: '1px solid #c4c4c4',
                borderRadius: '4px'
            }
        },
        checkitout: {
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            '&:hover': {
                color: color.title
            },
            cursor: 'pointer',
        },
    })();
    return (
        <Fragment>
            <div className={classes.container}>
                <div>
                    <h3 style={{}}>{title}</h3>
                    <p>{subtitle}</p>
                    <img src={thumbnailUrl}/>
                    <div style={{padding: '.5rem'}}>
                        <p>{summary}</p>
                    </div>
                </div>
                <span onClick={()=>{window.open(link, "_blank")}} className={classes.checkitout+" animated infinite tada delay-3s"}>
                    <i className="fab fa-github"></i>&nbsp;
                    <span style={{textDecoration: 'underline'}}>Check it out!</span>
                </span>
            </div>
            {last?null:<Divider />}
        </Fragment>
    )
}
export default OwnProject;