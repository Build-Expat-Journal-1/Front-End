import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosAuth'
import Profile from './Profile'

const initalUser = [{
    username: '',
    password: '',
    id: 2
}]

export default function Dashboard () {
    const [ userLoggedIn, setUserLoggedIn ] = useState(initalUser)
    const usernameInStorage = useState(window.localStorage.getItem('username'))

    useEffect(() => {
        axiosWithAuth()
        .get(`https://bw-expatjournal.herokuapp.com/api/users`)
        .then(res => {
            console.log(res)
            const currentUser = res.data.users.filter(user => (
                user.username === usernameInStorage[0]
            ),[0]);
            console.log(currentUser)
            setUserLoggedIn(currentUser)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            
            {userLoggedIn.map(user => {
            return <Profile user={user}/>
            })
        }
            

        </div>
    )

}