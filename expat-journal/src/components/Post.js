import React, { useState } from 'react'
import { axiosWithAuth } from "../utils/axiosAuth.js";





const Post = (props) => {

    const [ editing, setEditing ] = useState(false);



    return (
        <div>
            <h2>{story.title}</h2>
            <img alt='story' src={story.storyImage}/>
            <p>{story.location}</p>
            <p>{story.date}</p>
            <p>{story.description}</p>
            <button onClick={editStory}>Edit</button>
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

export default Post 