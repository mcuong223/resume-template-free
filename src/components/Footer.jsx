import React, { Fragment } from 'react';
import {color} from '../contents/customize';
import { makeStyles } from '@material-ui/core';
const Footer = ({ data }) => {
    const classes = makeStyles({
        container: {
            height: "50px",
            background: '#32383e',
            color: '#868686',
            '& a': {
                color: '#d8d8d8'
            }
        },
        flex: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })();
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.flex}>
                    <span>
                        <i className="fas fa-copyright"></i>&nbsp;
                        Designed by <a href="https://facebook.com/cuongpham2203" target="_blank">manCuong</a>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;