import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import { TodosArray } from '../types/TodosInterface'
import { UserInterface } from '../types/UserInterface'

const initialStateTodos: TodosArray = {
    arrayTodos: []
}

function reduceTodos(state = initialStateTodos, action: any) {
    switch(action.type) {
        case 'GET_TODOS':
            return {
                arrayTodos: action.payload
            }
        default:
            return state
    }
}

const initialStateUser: UserInterface = {
    name: "",
    username: "",
    email: "",
}

function reduceUser(state = initialStateUser, action: any) {
    switch(action.type) {
        case 'GET_USER':
            return {
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email
            }
        default:
            return state
    }
}

const createRootReducer = () => combineReducers({
    todos: reduceTodos,
    user: reduceUser
})

const store = createStore(createRootReducer(), composeWithDevTools())

export {store}