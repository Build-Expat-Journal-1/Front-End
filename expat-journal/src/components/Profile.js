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


    const [ editing, setEditing ] = useState(false);
    const [ storyToEdit, setStoryToEdit ] = useState(initalStory);
    const [ newStory, setNewStory ] = useState(initalStory);

    const id = storyToEdit.id
    
    const editStory = story => {
        setEditing(true);
        setStoryToEdit(story);
    };

    const saveEdit = e => {
        axiosWithAuth()
        .put(`/api/stories/${id}`, storyToEdit)
        .then(res => 
            console.log(res))
        .catch(err => console.log(err))
    }
return (
    <div>
        <div className = 'profile-container'>
            {/* <Post key={story.id} story={story} editStory={editStory}/> */}
        </div>
        <form>
            <legend>new story</legend>

        </form>
        {editing && (
            <form onSubmit={saveEdit}>
                <legend>edit story</legend>
                <label>
                    Title:
                    <input
                        onChange={e => 
                        setStoryToEdit({...storyToEdit, title: e.target.value})} 
                        value={storyToEdit.title}/>
                    </label>
            </form>
        )

        }
    </div>
    )
}

export default Profile