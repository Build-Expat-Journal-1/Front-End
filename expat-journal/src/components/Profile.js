import React, { useEffect, useState } from "react"
import Post from './Post.js'
import { connect } from 'react-redux'
import { addStory } from '../actions/addStory'
import { axiosWithAuth } from "../utils/axiosAuth.js"

import EditStory from "./EditStory.js"
import AdminPost from "./AdminPost.js"

import { editStory } from '../actions/editStory'
import { deleteStory } from "../actions/deleteStory.js"


const initalStory = {
    title: '',
    location: '',
    date: '',
    description: '',
    storyImage: ''
}


const Profile = (props) => {

    const [ userStories, setUserStories ] = useState([])
    const [ newStory, setNewStory ] = useState(initalStory)
    const [ addingAStory, setAddingAStory ] = useState(false)   
    
useEffect(() => {
        console.log('i ran!')
        axiosWithAuth()
        .get(`https://bw-expatjournal.herokuapp.com/api/stories/${props.user.id}/my-stories`)
        .then(res =>
            setUserStories(res.data))
        .catch(err => console.log(err))
    }, [ props.editStory, props.deleteStory ])


    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setNewStory({
            ...newStory,
            [name]: value 
        })
    }
    const addStory = e => {
        e.preventDefault();
        setAddingAStory(false)
        props.addStory(newStory)
    }

return (
    <div className='feed'>
        
        {

            userStories.map(story => {
            return (
                    <div>
                        <AdminPost key={story.id} story={story}/>  
                    </div>
            )})
        }

    <button onClick={() => setAddingAStory(true)}>Add A Story</button>

        {addingAStory && (<form onSubmit={addStory}>
            <legend>Add A Story</legend>
            <input 
                name='title'
                value={newStory.title}
                placeholder='title'
                onChange={onInputChange}
                />
            <input 
                name='location'
                value={newStory.location}
                placeholder='location'
                onChange={onInputChange}
                />
            <input 
                name='date'
                value={newStory.date}
                placeholder='date'
                onChange={onInputChange}
                />
            <input 
                name='description'
                value={newStory.description}
                placeholder='description'
                onChange={onInputChange}
                />
            <input
                name='storyImage'
                value={newStory.storyImage}
                placeholder='imageURL'
                onChange={onInputChange}
                />
            <button>Submit</button>
        </form>)}
        
    </div>
    )
}

const mapStateToProps = state => {
    return {
        editStory: state.editStoryReducer.story,
        deleteStory: state.deleteStoryReducer.story,
        addStory: state.addStoryReducer.story
    }

}

export default connect(mapStateToProps, {addStory})(Profile)
