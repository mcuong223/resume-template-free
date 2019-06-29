import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const About = ({data}) => {
    const classes = makeStyles(styles)();
    return (
        <Fragment>
            <Card style={{color: 'inherit'}}>
                <CardContent>
                    <div className={classes.container}>
                        <p className="card-title">
                            About me
                        </p>
                        <p>
                            {data}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}
const styles = {
    container: {
        '& p': {
            fontSize: '1.2rem',
            fontWeight: '500',
        },
        '& span': {
            cursor: 'pointer',
            marginLeft: '1rem',
        },
        '& i': {
            fontSize: '1.7rem'
        },
        padding: '1rem'
    },
    icon: {
        width: '30px',
        display: 'inline-block',
        textAlign: 'right',
        marginRight: '.7rem'
    }
}
export default About;