import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'
import { UserInterface } from "../../types/UserInterface"

const User = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(resposta => dispatch({type:'GET_USER', payload: resposta.data}))
    }, [])

    const usuario: UserInterface = useSelector((state:any) => state.user)

    return (
        <div>
            <p>Username: {usuario.username}</p>
            <p>Name: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
        </div>
    )
}

export default User