import React, { useState } from "react"
import Post from './Post.js'
import { axiosWithAuth } from "../utils/axiosAuth.js";




const initalStory = {
  title: '',
  location: '',
  date: '',
  description: '',
  storyImage: ''
}

const Profile = (props) => {

    const [ stories, setStories ] = useState()
    const [ newStory, setNewStory ] = useState(initalStory);

   


    }
return (
    <div>
        <div className = 'profile-container'>
            {/* <Post key={story.id} story={story} editStory={editStory}/> */}
        </div>
        <form>
            <legend>new story</legend>

        </form>
        {editing 

        }
    </div>
    )
}

export default Profile