import React, { Component } from 'react';

import Todo from './Todo.jsx';

import TodoStore from '../stores/TodoStore';
import FilterStore from '../stores/FilterStore';

import { toggleTodo, deleteTodo } from '../actions';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: getVisibleTodos(TodoStore.getTodos(), FilterStore.getFilter()),
        };
    }

    componentWillMount() {
        TodoStore.on('change', () => {
            this.setState({
                todos: getVisibleTodos(TodoStore.getTodos(), FilterStore.getFilter()),
            });
        });

        FilterStore.on('filter', () => {
            this.setState({
                todos: getVisibleTodos(TodoStore.getTodos(), FilterStore.getFilter()),
            });
        });
    }

    handleToggleTodo(id) {
        toggleTodo(id);
    }

    handleDeleteTodo(id) {
        deleteTodo(id);
    }

    render() {
        return (
            <div className="base">
                {
                    this.state.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onToggle={() => this.handleToggleTodo(todo.id)}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                        />
                    )
                }
            </div>
        );
    }
}

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
          return todos;

        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed);

        case 'SHOW_NEW':
          return todos.filter(todo => !todo.completed);
    }
}
