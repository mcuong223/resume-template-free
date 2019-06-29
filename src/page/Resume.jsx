import React, {Fragment, Component} from 'react';
import content from '../contents/content'
import {color} from '../contents/customize';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Header from '../components/Header';
import Contact from '../components/Contact';
import About from '../components/About';
import Education from '../components/Education';
import Skill from '../components/Skill';
import Work from '../components/Work';
import OwnProject from '../components/OwnProject';
import Footer from '../components/Footer';
import $ from 'jquery';

class Resume extends Component  {
    
    componentDidMount(){
        document.body.style.backgroundColor = color.backgroundColor;
        document.title = content.webTitle;
        $('.card-title').css('color', color.title)
    }
    render(){
        const {classes} = this.props;
        return(
            <Fragment>
                <Header data={content.header}/>
                <div className={classes.container}>
                    <Grid container justify="center">
                        <Grid item xs={12} md={11}>
                            {/* a row */}
                            <Grid container spacing={3} style={{marginTop: '1rem'}}>
                                <Grid item xs={12} md={7}>
                                    <div className={classes.item + " " +classes.left}>
                                        <Contact data={content.contact}/>
                                    </div>
                                    <div className={classes.item + " " +classes.left}>
                                        <Skill data={content.skills}/>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <div className={classes.item}>
                                        <About data={content.summary}/>
                                    </div>
                                    <div className={classes.item}>
                                        <Education data={content.education}/>
                                    </div>
                                    <div className={classes.item}>
                                        <Work data={content.works}/>
                                    </div>
                                    <div className={classes.item}>
                                        <OwnProject data={content.ownProjects}/>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </Fragment>
        )
    }
}
const styles = {
    container: {
        padding: '2rem 1rem'
    },
    item: {
        margin: '0 auto 1rem',
    },
    left: {
        position: 'sticky',
        top: '5px',
    }
}
export default withStyles(styles)(Resume);
