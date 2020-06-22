import React, { useState } from "react"
import Post from './Post.js'



const initalStory = {
    
}
const Profile = (props) => {

    const [ editing, setEditing ] = useState(false);
    const [ storyToEdit, setStoryToEdit ] = useState(initalStory)
    return (
    <div>
        <div className = 'profile-container'>
            <Post />
        </div>
        {editing && (
            <form onSubmit={saveEdit}>
                <legend>edit story</legend>
                <label>
                    Title:
                    <input
                        onChange={e => 
                        set}   
            </form>
        )

        }
    </div>
    )
}