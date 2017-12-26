import React, { Component } from 'react';

import styles from './Todo.less';

export default class Todo extends Component {
    render() {
        const { text, completed, onToggle, onDelete } = this.props;

        return (
            <div className={styles.root}>
                <div
                    className={completed ? styles.completed : styles.text}
                    onClick={onToggle}
                >
                    {text}
                </div>
                <button
                    className={styles.removeBtn}
                    onClick={onDelete}
                >
                    <svg viewBox="0 0 44 44" width="44" height="44">
                        <line x1="16" y1="16" x2="28" y2="28" stroke="lightgrey" />
                        <line x1="28" y1="16" x2="16" y2="28" stroke="lightgrey" />
                    </svg>
                </button>
            </div>
        );
    }
}
