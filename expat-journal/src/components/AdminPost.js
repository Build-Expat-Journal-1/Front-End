import React,{useEffect,useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TimelineLite, Power3 } from 'gsap'
import EditStory from './EditStory';
import DeleteStory from './DeleteStory';

import './AdminPost.css'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    media: {
        height: 275,
    }
});


const AdminPost = (props) => {

    const { story } = props
    const classes = useStyles();

//Gsap Animation    
    let userStory = useRef(null)

        useEffect(() =>{
            let userStoryName= userStory.lastElementChild;
            let tl= new TimelineLite()
        tl.from(userStory,2,{opacity:0,ease:Power3.easeInOut}, .1)
            .from(userStoryName, 1.2, {opacity:1,y:1280, ease:Power3.easeOut}, 0)
            
        }, [])
      
//End of Animation



    return (
        <div className='card-container' ref= {element => userStory=element} >
        <Card variant='outlined' className={classes.root}> 
            <CardHeader
            title={story.title}
            subheader={story.location}/>
            <CardMedia
                className={classes.media}
                component='img'
                src={story.storyImage}/>
            <CardContent>
                <Typography variant='body1' component='p'>
                {story.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {story.description}
                </Typography>
                <div className="adminTools">
                <EditStory story={story}/>
                <DeleteStory story={story}/>
                </div>   
            </CardContent>
        </Card>
        </div>
    )
}



export default AdminPost