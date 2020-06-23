import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10
    },
    media: {
        height: 275,
    }
});


const Post = (props) => {

    const { story } = props
    const classes = useStyles();

    return (
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
            </CardContent>
        </Card>
    )
}

export default Post 