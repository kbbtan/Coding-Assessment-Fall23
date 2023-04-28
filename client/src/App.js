// Package Imports.
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Page Imports.
import TodosListPage from "./pages/TodosListPage/TodosListPage";
import AddTodoPage from './pages/AddTodoPage/AddTodoPage';
import EditTodoPage from './pages/EditTodoPage/EditTodoPage';

function App() {
  return (
    <Router>
      <Route path="/" component={TodosListPage} exact/>
      <Route path="/add" component={AddTodoPage} exact/>
      <Route path="/edit" render={(props) => <EditTodoPage {...props}/>} exact/>
    </Router>
  );
}

export default App;
