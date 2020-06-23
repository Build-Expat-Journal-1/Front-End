import React from 'react'



const Post = (props) => {

    const { story } = props


    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignContent:'center', flexWrap:'wrap'}}>
            <h2>{story.title}</h2>
            

                <img style={{width:'80'}} src={story.storyImage}/>
                
                <p>{story.location}</p>
                <p>{story.date}</p>
                <p>{story.description}</p>

    
            <button onClick={() => props.editStory(story)}>Edit</button>
        </div>
    )
}

export default Post 