import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {color} from '../contents/customize';

const Contact = ({data}) => {
    const classes = makeStyles(styles)();
    const { phone, email, address, media } = data;
    const { facebook, github, instagram, twitter, medium, website } = media;
    return (
        <Fragment>
            <Card style={{ color: 'inherit'}}>
                <CardContent>
                    <div className={classes.container}>
                        <p className="card-title">
                            Contact
                        </p>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={"auto"}>
                                <div style={{padding: '.7rem 0'}}>
                                    Media:
                                    {!github ? null
                                        : <span style={{color: '#24292e', marginLeft: '1rem'}} className={classes.icon} onClick={() => { window.open(github, "_blank") }}><i className="fab fa-github"></i></span>}
                                    {!facebook ? null
                                        : <span style={{color: '#4267b2', marginLeft: '1rem'}} className={classes.icon} onClick={() => { window.open(facebook, "_blank") }}><i className="fab fa-facebook"></i></span>}
                                    {!instagram ? null
                                        : <span style={{color: '#a6338f', marginLeft: '1rem'}} className={classes.icon} onClick={() => { window.open(facebook, "_blank") }}><i className="fab fa-instagram"></i></span>}
                                    {!twitter ? null
                                        : <span style={{color: '#1c9deb', marginLeft: '1rem'}} className={classes.icon} onClick={() => { window.open(twitter, "_blank") }}><i className="fab fa-twitter"></i></span>}
                                    {!medium ? null
                                        : <span className={classes.icon} onClick={() => { window.open(twitter, "_blank") }}><i className="fab fa-medium"></i></span>}
                                    {!website ? null
                                        : <span style={{color: '#4267b2'}} className={classes.icon} onClick={() => { window.open(twitter, "_blank") }}><i className="fas fa-globe"></i></span>}
                                </div>
                            </Grid>
                            <Grid item xs={12} md={"auto"}>
                                <div>
                                    <a href={`tel:${phone}`}>
                                        <div className={classes.icon}>
                                            <span><i className="fas fa-phone"></i></span>
                                        </div>
                                        {phone}
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={"auto"}>
                                <div>
                                    <a href={`mailto:${email}`}>
                                        <div className={classes.icon}>
                                            <span><i className="fas fa-envelope"></i></span>
                                        </div>
                                        {email}
                                    </a>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={"auto"}>
                                <div>
                                    <div className={classes.icon}>
                                        <span><i className="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    {address}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}
const styles = {
    container: {
        '& div': {
            // fontSize: '1.1rem',
            fontWeight: '500',
            padding: '.3rem 0rem',
            fontSize: '1.2rem'
        },
        '& span': {
            cursor: 'pointer',
            color: color.title,
        },
        '& i': {
            fontSize: '1.7rem',
        },
        '& i:hover': {
            color: '#1c1c1c'
        },
        padding: '1rem'
    },
    icon: {
        width: '20px',
        display: 'inline-block',
        textAlign: 'left',
        marginRight: '.7rem'
    }
}
export default Contact;