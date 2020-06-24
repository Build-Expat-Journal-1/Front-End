import React, { useState } from 'react'
import { deleteStory }  from '../actions/deleteStory'
import { connect } from 'react-redux'


const DeleteStory = (props) => {

    
    const [ storytoDelete, setStoryToDelete ] = useState(props.story)

    const deleteStory = (e) => {
        e.preventDefault();
        props.deleteStory(storytoDelete.id);
    }
    return (

        <button onClick={deleteStory}>Delete</button>
    )

}

export default connect(null, { deleteStory })(DeleteStory);
