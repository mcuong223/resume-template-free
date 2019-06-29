import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Skill = ({data}) => {
    const classes = makeStyles({
        section: {
            marginBottom: '1rem',
        },
        container: {
            padding: '0 .8rem'
        }
    })();
    if (!data) return null;
    const {overviews, languages, frameworks} = data;
    return (
        <Fragment>
            <Card style={{color: 'inherit'}}>
                <CardContent>
                    <p className="card-title">
                        Skills
                    </p>
                    <div className={classes.container}>
                        <div className={classes.section}>
                            <h2>Overviews</h2>
                            {overviews.map((i, index)=>{
                                return(
                                    <Item type={1} data={i} key={i + index} />
                                )
                            })}
                        </div>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <div className={classes.section}>
                                    <h2>Programming languages</h2>
                                    {languages.map((i, index)=>{
                                        return(
                                            <Item type={2} data={i} key={i + index} />
                                        )
                                    })}
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className={classes.section}>
                                    <h2>Frameworks</h2>
                                    {frameworks.map((i, index)=>{
                                        return(
                                            <Item type={2} data={i} key={i + index} />
                                        )
                                    })}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    )
}

const Item = ({data, type}) => {
    const classes = makeStyles({
        container: {
            padding: '.7rem',
            fontSize: '1.25rem',
        },
        icon: {
            width: '30px',
            display: 'inline-block',
        },
    })();
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.icon}>
                    <i className="fas fa-code"></i>
                </div>
                <span>{data}</span>
            </div>
        </Fragment>
    )
}
export default Skill;