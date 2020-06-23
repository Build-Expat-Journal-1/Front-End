import React from "react"
import Post from './Post.js'
import { connect } from 'react-redux'
import { addStory } from '../actions/addStory'




const Profile = (props) => {


const addStory = e => {
        e.preventDefault();
        props.addStory()
    }

return (
    <div>
        <div className = 'profile-container'>
            {stories.map(story =>
            <Post key={story.id} story={story}/>)}
        </div>
        <button onClick={addStory}>Add Story</button>
    </div>
    )
}

export default Profile


const mapStateToProps = state => {
    return {
        stories: state.addStoryReducer.stories,
    }
}

export default connect(mapStateToProps, {addStory})(Profile);