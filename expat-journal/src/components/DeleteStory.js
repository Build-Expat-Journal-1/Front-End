import React, { useState } from 'react'
import { deleteStory }  from '../actions/deleteStory'
import { connect } from 'react-redux'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const DeleteStory = (props) => {

    
    const [ storytoDelete ] = useState(props.story)

    const deleteStory = () => {
        props.deleteStory(storytoDelete.id);
    }
    return (
   <IconButton onClick={() => { deleteStory() }}>
        <DeleteIcon/>
  </IconButton>
    )

}

export default connect(null, { deleteStory })(DeleteStory);
