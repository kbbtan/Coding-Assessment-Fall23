// Package Imports.
import React, {useState, useEffect} from 'react';

// Bootstrap Imports.
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Component Imports.
import TodoCard from './components/TodoCard';

// CSS Import.
import './TodosListPage.css';

const TodosListPage = () => {
    // Initialize todos in state.
    // todos is a list of todo objects with {title, description, id}.
    const [todos, setTodos] = useState([])

    // Continually fetch updated todos from database and update to state.
    useEffect(() => {
        fetch("http://localhost:3001/todos")
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(jsonRes => setTodos(jsonRes))
        .catch(err => console.log(err))
    }, [todos])

    return (
        <Container className="mt-5 mb-5">
            <div className="todo-list-header">
                <h1>Your Todos:</h1>
                <Button variant="primary" href="/add">Add Todo</Button>
            </div>
            
            {todos.map(todo => 
                <TodoCard todo={todo} key={todo._id}/>
            )}
        </Container>
    )
}

export default TodosListPage;