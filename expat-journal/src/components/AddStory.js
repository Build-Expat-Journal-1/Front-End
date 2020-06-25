import React, { useState } from 'react'
import { addStory } from '../actions/addStory'
import { Fab, TextField, Button, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
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
        window.location.reload()

    }



    return (
        <Fab 
            onClick={() => {setModalOpen(true)}} 
                color="primary" 
                aria-label="add">
            <AddIcon />

        <Modal className='addStoryModal' isOpen={modalOpen}>
                <form className='addStoryForm'>
                    <div>{props.success}</div>
                    <h2>Add Story</h2>
                  
                    <TextField style={{marginTop:'1rem'}}
                            name='title'
                            value={newStory.title}
                            placeholder='TITLE'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='location'
                            value={newStory.location}
                            placeholder='LOCATION'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='date'
                            value={newStory.date}
                            placeholder='DATE'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='description'
                            value={newStory.description}
                            placeholder='DESCRIPTION'
                            onChange={onInputChange}
                            />
                        <TextField style={{marginTop:'1rem'}}
                            name='storyImage'
                            value={newStory.storyImage}
                            placeholder='IMAGE URL'
                            onChange={onInputChange}
                            />
                        <Button style={{marginTop:'1rem'}} variant='outlined' onClick={addStory}>Submit</Button>
                        
                        <IconButton onClick={() => {closeModal()}}>
                            <CloseIcon/>
                        </IconButton>
                        
                    </form>
                </Modal>        
            </Fab>
         )
        }


const mapStateToProps = (state) => {
    
    return {
        add: state.addStoryReducer.stories,
        success: state.addStoryReducer.success_message
        
    }
}

export default connect(mapStateToProps, {addStory})(AddStory)