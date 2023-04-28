// Package Imports.
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

// Bootstrap Imports.
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// CSS Import.
import './TodoCard.css';

const TodoCard = ({todo}) => {
    // Initialize editTodoObject in state.
    // This variable tracks the todoObject to be edited.
    const [editTodoObject, setEditTodoObject] = useState(null);

    // Update state with todoObject to be edited.
    const editTodo = (editTodoObject) => {
        setEditTodoObject(editTodoObject);
    }

    // Handles deletion of todo object in database.
    const deleteTodo = (_id) => {
        axios.delete("http://localhost:3001/delete/" + _id);
    }

    // Redirect to the edit page if there is a todoObject to be edited.
    if (editTodoObject) {
        return <Redirect to={{
            pathname: "/edit",
            state: {editTodoObject: editTodoObject}
        }}/>
    }

    return (
        <Card className="mt-4">
            <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>{todo.description}</Card.Text>
                <Button className="card-action-button" variant="warning"
                onClick={() => editTodo(todo)}>Edit</Button>
                <Button className="card-action-button" variant="danger"
                onClick={() => deleteTodo(todo._id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default TodoCard;