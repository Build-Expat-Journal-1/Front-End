import React from 'react'
import { connect } from 'react-redux'

import { addStory } from '../actions/addStory'

const AddStory = props => {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button onClick={() => props.addStory(props.story, props.user.id)} className="button">Add</button>
      </li>
    );
  };

 