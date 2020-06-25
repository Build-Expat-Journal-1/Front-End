import React,{useState, useEffect,} from "react"
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'

import './Home.css'

const Home = () => {
  const [userStories, setStories]= useState([])

   useEffect(() => {
        axios.get(`https://bw-expatjournal.herokuapp.com/api/stories`)
        .then(response =>{
         setStories(response.data)
        })
        .catch(err =>{
            debugger
        })
        
   }, []) 
    return (
      <div>
      <div className='CommunityBar'>
        <h1>STORIES FROM OUR COMMUNITY</h1>
      </div>
      
        <div className='feed'>
              {
                userStories.map(info => {
                  return (
                    <Post key={info.id} story={info} />
                  )
                })
              }
        </div>
      </div>
    )

}

export default Home