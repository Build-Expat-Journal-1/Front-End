import React, { useState } from 'react'
import { addStory } from '../actions/addStory'
import { Fab, TextField,Button } from '@material-ui/core'
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
        props.addStory(newStory)
        setNewStory(initalStory)
        setModalOpen(false)
    }

    const closeModal = e => {
        e.preventDefault();
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
                <TextField style={{marginTop:'1rem'}}
                    name='title'
                    value={newStory.title}
                    placeholder='Title'
                    onChange={onInputChange}
                    />
                <TextField style={{marginTop:'1rem'}}
                    name='location'
                    value={newStory.location}
                    placeholder='Location'
                    onChange={onInputChange}
                    />
                <TextField style={{marginTop:'1rem'}}
                    name='date'
                    value={newStory.date}
                    placeholder='Date'
                    onChange={onInputChange}
                    />
                <TextField style={{marginTop:'1rem'}}
                    name='description'
                    value={newStory.description}
                    placeholder='Description'
                    onChange={onInputChange}
                    />
                <TextField style={{marginTop:'1rem'}}
                    name='storyImage'
                    value={newStory.storyImage}
                    placeholder='imageURL'
                    onChange={onInputChange}
                    />
                <Button style={{marginTop:'1rem'}} onClick={addStory}>Submit</Button>
                <Button onClick={() => closeModal()}>Close</Button>
            </form>
        </Modal>        
    </Fab>
         )
        }


export default connect(null, {addStory})(AddStory)