import dispatcher from '../dispatcher';

export const addTodo = text => {
    dispatcher.dispatch({
        type: 'ADD_TODO',
        text,
    });
};

export const deleteTodo = id => {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id,
    });
};

export const toggleTodo = id => {
    dispatcher.dispatch({
        type: 'TOGGLE_TODO',
        id,
    });
};

export const checkAll = () => {
    dispatcher.dispatch({
        type: 'CHECK_ALL',
    });
};

export const setVisibilityFilter = filter => {
    dispatcher.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter,
    });
};
