import React, { useEffect, useState } from "react"
import Post from './Post.js'
import { connect } from 'react-redux'
import { addStory } from '../actions/addStory'
import { axiosWithAuth } from "../utils/axiosAuth.js"
import axios from 'axios'

const Profile = (props) => {

    const [ userStories, setUserStories ] = useState([])
    
    
    useEffect(() => {
        axiosWithAuth()
        .get(`https://bw-expatjournal.herokuapp.com/api/stories/${props.user.id}/my-stories`)
        .then(res =>
            setUserStories(res.data))
        .catch(err => console.log(err))
    }, [])


    const addStory = e => {
        e.preventDefault();
        props.addStory()
    }

return (
    <div className='feed'>
        {
         userStories.map(story => {
         return <Post key={story.id} story={story}/>
            })
        }
    </div>
    )
}


export default Profile