import React, { useState } from "react"
import Post from './Post.js'


const initalStory = {
    title: '',
    location: '',
    date: '',
    description: '',
    storyImage: ''
  }




const Profile = (props) => {

    const [ stories, setStories ] = useState()
    // const [ newStory, setNewStory ] = useState([initalStory]);


return (
    <div>
        <div className = 'profile-container'>
            {stories.map(story =>
            <Post key={story.id} story={story}/>)}
        </div>
    </div>
    )
}

export default Profile