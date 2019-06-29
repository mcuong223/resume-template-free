import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const Header = ({data}) => {
    const classes = makeStyles(styles)();
    return(
        <Fragment>
            <div 
                style={{
                    margin: window.isMobile ? "1rem 1rem -1rem" : "auto",
                    borderRadius: window.isMobile ? "5px" : "unset"
                }} 
                className={classes.container}
            >
                <Grid container>
                    <Grid item xs={12} md={"auto"}>
                        <div className={classes.avatarWrapper}>
                            <div 
                                className={classes.avatar}
                                style={{
                                    width: '150px',
                                    // paddingTop: '100%',
                                    height: '150px',
                                    backgroundImage: `url(${process.env.PUBLIC_URL + data.avatarUrl}`
                                }}
                            >
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={"auto"}>
                        <div className={classes.wrapper} style={window.isMobile?{display: 'block'}:{}}>
                            <div style={window.isMobile?{textAlign: 'center'}:{}}>
                                <p className={classes.name}>
                                    {data.name}
                                </p>
                                <p className={classes.nameSubtitle}>
                                    {data.nameSubtitle}
                                </p>
                            </div>
                        </div>
                    </Grid>
                    {window.isMobile?null:
                    <Grid item md={"auto"} style={{flex: '1'}}>
                        <div style={{display: 'flex', height: '100%', alignItems: 'center'}}>
                            <p style={{textAlign: 'right', fontSize: '4rem', width: '88%'}}><i className="fas fa-code"></i></p>
                        </div>
                    </Grid>}
                </Grid>
            </div>
        </Fragment>
    )
}
export default Header;
const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    avatarWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
    },
    avatar: {
        '-webkit-border-radius': '50%',
        '-webkit-background-clip': 'padding-box',
        '-moz-border-radius': '50%',
        '-moz-background-clip': 'padding',
        'border-radius': '50%',
        'background-clip': 'padding-box',
        'background-size': 'cover',
        'background-position': 'center center',
    },
    name: {
        fontSize: '2.9rem',
        fontWeight: 'bold'
    },
    nameSubtitle: {
        fontSize: '1.6rem',
        fontWeight: '500',
        color: 'rgba(66, 66, 66, 0.61)'
    },
    container: {
        backgroundColor: '#fbfbfb',
    }
}