import EventEmitter from 'events';
import dispatcher from '../dispatcher';

let todos = [];

const TodoStore = Object.assign({}, EventEmitter.prototype, {
    addTodo(text) {
        todos.push({
            id: Date.now(),
            text,
            completed: false,
        });

        TodoStore.emit('change');
    },

    deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);

        TodoStore.emit('change');
    },

    toggleTodo(id) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        TodoStore.emit('change');
    },

    checkAll() {
        todos = todos.map(todo => {
            todo.completed = true;
            return todo;
        });

        TodoStore.emit('change');
    },

    getTodos() {
        return todos;
    },

    handleActions(action) {
        switch (action.type) {
            case 'ADD_TODO': {
                this.addTodo(action.text);
                break;
            }
            case 'DELETE_TODO': {
                this.deleteTodo(action.id);
                break;
            }
            case 'TOGGLE_TODO': {
                this.toggleTodo(action.id);
                break;
            }
            case 'CHECK_ALL': {
                this.checkAll();
                break;
            }
        }
    }
});

dispatcher.register(TodoStore.handleActions.bind(TodoStore));
window.dispatcher = dispatcher;
export default TodoStore;
