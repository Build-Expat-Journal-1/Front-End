import React, { useState } from 'react'
import { addStory } from '../actions/addStory'
import { Fab, TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import './AddStory.css'



const initalStory = {
    title: '',
    location: '',
    date: '',
    description: '',
    storyImage: ''
}

const AddStory = (props) => {
    const [ newStory, setNewStory ] = useState(initalStory)
    const [ modalOpen, setModalOpen ]= useState(false)


    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
    
        setNewStory({
            ...newStory,
            [name]: value 
        })
    }

    const addStory = (e) => {
        e.preventDefault();
        setModalOpen(false)
        props.addStory(newStory)
        setNewStory(initalStory)
        
    }

    const closeModal = () => {
        setModalOpen(false)
    }



    return (
        <Fab 
            onClick={() => {setModalOpen(true)}} 
                color="primary" 
                aria-label="add">
            <AddIcon />

        <Modal className='addStoryModal' isOpen={modalOpen}>
                <form className='addStoryForm'>
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
                <Button variant='outlined' onClick={addStory}>Submit</Button>
                <button>Close</button>
            </form>
            
        </Modal>        
    </Fab>
         )
        }


export default connect(null, {addStory})(AddStory)