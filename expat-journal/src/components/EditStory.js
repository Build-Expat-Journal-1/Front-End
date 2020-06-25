import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editStory } from '../actions/editStory'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'

const EditStory = props => {
   const [ editing, setEditing ] = useState(false)
   const [ storytoEdit, setStoryToEdit ] = useState(props.story)

   const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setStoryToEdit({
        ...storytoEdit,
        [name]: value 
    })
  }

  const editStory = e => {
    e.preventDefault();
    setEditing(false);
    props.editStory(storytoEdit, storytoEdit.id);
}

    return (
      <div>
        <IconButton onClick={() => {setEditing(true)}}>
          <EditIcon/>
        </IconButton>
        { editing && (
                <form>
                  <input 
                    name='title'
                    value={storytoEdit.title}
                    onChange={onInputChange}/>
                    <input 
                    name='location'
                    value={storytoEdit.location}
                    onChange={onInputChange}/>
                    <input 
                    name='date'
                    value={storytoEdit.date}
                    onChange={onInputChange}/>
                    <input 
                    name='description'
                    value={storytoEdit.description}
                    onChange={onInputChange}/>
                    <input 
                    name='storyImage'
                    value={storytoEdit.storyImage}
                    onChange={onInputChange}/>
                  
                  <button onClick={editStory} 
                  className="button">Save Edits</button>
              </form>
        )
        }
        
        
      </div>
    );
  };

  export default connect(null, { editStory })(EditStory);

 