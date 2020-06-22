import React from 'react'





const Post = (props) => {

    const { story } = props



    return (
        <div>
            <h2>{story.title}</h2>
            <img alt='story' src={story.storyImage}/>
            <p>{story.location}</p>
            <p>{story.date}</p>
            <p>{story.description}</p>
            <button>Edit</button>     
        </div>
    )
}

export default Post 