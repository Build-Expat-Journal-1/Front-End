import React, { useState } from 'react'
import { deleteStory }  from '../actions/deleteStory'
import { connect } from 'react-redux'


const DeleteStory = (props) => {

    
    const [ storytoDelete ] = useState(props.story)

    const deleteStory = () => {
        props.deleteStory(storytoDelete.id);
    }
    return (

        <button onClick={deleteStory}>Delete</button>
    )

}

export default connect(null, { deleteStory })(DeleteStory);
