// Package Imports.
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

// Bootstrap Imports.
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// CSS Import.
import './EditTodoPage.css';

const EditTodoPage = ({location}) => {
    const editTodoObject = location.state.editTodoObject;
    
    // Intialize todo to edit in state.
    // todo is an object with {title, description}.
    const [todo, setTodo] = useState({
        title: editTodoObject.title,
        description: editTodoObject.description
    })

    // Initialize formSubmitted in state.
    // formSubmitted is a boolean to keep track of whether the form is submitted.
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    // Continually update todo in state with form inputs.
    const handleFormInputChange = e => {
        const {name, value} = e.target;
        setTodo(todo => {
            return {
                ...todo,
                [name]: value
            }
        })
    }
    
    // Posts todo in state to the database when form is submitted.
    // Redirect to main TodosPage afterwards by setting formSubmitted to true.
    const handleSubmitForm = e => {
        e.preventDefault();

        let editedTodo = {
            title: todo.title,
            description: todo.description
        };

        axios.put("http://localhost:3001/editData/" + editTodoObject._id, editedTodo);
        setFormSubmitted(true);
    }

    // Redirect to TodosListPage if form has already been submitted.
    if (formSubmitted) {
        return <Redirect to="/"/>
    }

    return (
        <Container className="mt-5">
            <div className="edit-todo-header">
                <h1>Edit Todo</h1>
                <Button variant="primary" href="/">Back</Button>
            </div>

            <Form>
                <Form.Group className="mb-3" controlId="addTodoForm.TodoName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter a name" 
                    value={todo.title} onChange={handleFormInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="addTodoForm.TodoDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" placeholder="Enter a description" rows={3}
                    value={todo.description} onChange={handleFormInputChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmitForm}>
                    Edit
                </Button>
            </Form>
        </Container>
    )
}

export default EditTodoPage;