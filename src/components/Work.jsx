import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import {Divider} from '@material-ui/core';

const Work = ({ data }) => {
    const classes = makeStyles({
        
    })();
    if (!data) return null;
    return (
        <Fragment>
            <Card style={{color: 'inherit'}}>
                <CardContent>
                <p className="card-title">
                    Work experiences
                </p>
                {data.map((i, index)=>{
                    return(
                        <Item data={i} key={i.company + index} last={index==data.length-1}/>
                    )
                })}
                </CardContent>
            </Card>
        </Fragment>
    )
}

const Item = ({data, last}) => {
    let {role, company, time, description} = data;

    const classes = makeStyles({
        container: {
            padding: '1rem',
            fontSize: '1.25rem',
        },
        icon: {
            width: '30px',
            display: 'inline-block',
        },
        role: {
            padding: '.5rem'
        },
        company: {
            fontSize: '1.4rem',
            fontWeight: '500',
            padding: '.5rem'
        },
        description: {
            padding: '.5rem'
        }
    })();
    return (
        <Fragment>
            <div className={classes.container}>
                <div>
                    {time}
                </div>
                <div className={classes.role}>
                    <div className={classes.icon}>
                        <i className="fas fa-user-tag"></i>
                    </div>
                    <span>{role}</span>
                </div>
                <div className={classes.company}>
                    <div className={classes.icon}>
                        <i className="fas fa-building"></i> 
                    </div>
                    <span>{company}</span>
                </div>
                <div className={classes.description}>
                    <p>{description}</p>
                </div>
            </div>
            {last?null:<Divider />}
        </Fragment>
    )
}

const styles = {

}
export default Work;