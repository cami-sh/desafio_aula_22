import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch , useSelector} from 'react-redux'
import { TodosInterface } from '../../types/TodosInterface'

const Todos = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(resposta => dispatch({type: 'GET_TODOS', payload: resposta.data}))
    }, [])

    const todos: TodosInterface[] = useSelector((state: any) => state.todos.arrayTodos)

    return (
        <ul>
            {todos.map((item: TodosInterface) => (
                <li key={item.id}>
                    {item.title} - {item.id}
                </li>
            ))}
        </ul>
    );
    
}

export default Todos;