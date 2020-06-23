import React,{useState, useEffect,} from "react"
import Post from './Post'
import axios from 'axios'





const Home = () => {
  
  
    const [userStories, setStories]= useState([])


    useEffect(() => {
        axios.get(`https://bw-expatjournal.herokuapp.com/api/stories`)
        .then(response =>{
          console.log(response)
         
          setStories(response.data)
        
        })
        .catch(err =>{
            debugger
        })
        
      }, [])
        
    
  
    return (
        <div className='feed'>
       
       {
        userStories.map(info => {
          return (
            <Post story={info} />
          )
        })
      }
    
    
    
        </div>
    )

}

export default Home