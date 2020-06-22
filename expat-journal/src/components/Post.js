import React, { useState } from 'react'





const Post = (props) => {

    const [ editing, setEditing ] = useState(false);
    const [ storyToEdit, setStoryToEdit ] = useState(initalStory);

    const { story } = props
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