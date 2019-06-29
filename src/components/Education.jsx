import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import {Divider} from '@material-ui/core';

const Education = ({data}) => {
    const classes = makeStyles({
        
    })();
    if (!data) return null;
    return (
        <Fragment>
            <Card style={{color: 'inherit'}}>
                <CardContent>
                <p className="card-title">
                    Education
                </p>
                {data.map((i, index)=>{
                    return(
                        <Item data={i} key={i.major + i.school + i.time + index} last={index==data.length-1}/>
                    )
                })}
                </CardContent>
            </Card>
        </Fragment>
    )
}

const Item = ({data, last}) => {
    let {major, school, time} = data;
    const classes = makeStyles({
        container: {
            padding: '1rem',
            fontSize: '1.25rem',
        },
        icon: {
            width: '30px',
            display: 'inline-block',
        },
        major: {
            padding: '.5rem'
        },
        university: {
            fontSize: '1.3rem',
            fontWeight: '500',
            padding: '.5rem'
        }
    })();
    return (
        <Fragment>
            <div className={classes.container}>
                <div>
                    {time}
                </div>
                <div className={classes.major}>
                    <div className={classes.icon}>
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <span>{major}</span>
                </div>
                <div className={classes.university}>
                    <div className={classes.icon}>
                        <i className="fas fa-university"></i>
                    </div>
                    <span>{school}</span>
                </div>
            </div>
            {last?null:<Divider />}
        </Fragment>
    )
}

const styles = {

}
export default Education;