import React from 'react'



const Post = (props) => {

    const { story } = props


    return (
        <div>
            <h2>{story.title}</h2>
            <img src={story.storyImage}/>
            <p>{story.location}</p>
            <p>{story.date}</p>
            <p>{story.description}</p>
            <button onClick={() => props.editStory(story)}></button>
        </div>
    )
}

export default Post 