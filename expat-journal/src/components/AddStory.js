import React, { useState } from 'react'
import { addStory } from '../actions/addStory'
import { Fab, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux'



const initalStory = {
    title: '',
    location: '',
    date: '',
    description: '',
    storyImage: ''
}

const AddStory = (props) => {
    const [ newStory, setNewStory ] = useState(initalStory)
    const [ addingAStory, setAddingAStory ] = useState(false)
    const [ modalOpen, setModalOpen ]= useState(false)

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
        <Fab 
            onClick={() => {setAddingAStory(true)}} 
                color="primary" 
                aria-label="add">
            <AddIcon />

            { addingAStory && 

            (<form className='addStoryForm' onSubmit={addStory}>
                
                <legend>Add A Story</legend>
                <TextField 
                    name='title'
                    value={newStory.title}
                    placeholder='title'
                    onChange={onInputChange}
                    />
                <TextField
                    name='location'
                    value={newStory.location}
                    placeholder='location'
                    onChange={onInputChange}
                    />
                <TextField
                    name='date'
                    value={newStory.date}
                    placeholder='date'
                    onChange={onInputChange}
                    />
                <TextField
                    name='description'
                    value={newStory.description}
                    placeholder='description'
                    onChange={onInputChange}
                    />
                <TextField
                    name='storyImage'
                    value={newStory.storyImage}
                    placeholder='imageURL'
                    onChange={onInputChange}
                    />
                <button onClick={()=> setModalOpen(false)}>Submit</button>
                
            </form>)
            }
        </Fab>
         )
        }


export default connect(null, {addStory})(AddStory)