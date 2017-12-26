import ReactDOM from 'react-dom';
import React from 'react';

import TodoApp from './components/TodoApp.jsx';

// styles
import 'normalize.css';
import './assets/main.css';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);
