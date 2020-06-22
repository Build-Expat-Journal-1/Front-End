import React from 'react'



const Post = (props) => {

    

    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.storyImage}/>
            <p>{props.location}</p>
            <p>{props.date}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Post 