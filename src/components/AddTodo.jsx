import React, { Component } from 'react';

import { addTodo, checkAll } from '../actions';

import styles from './AddTodo.less';

const ENTER_KEY = 13;

export default class AddTodo extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    state = {
        text: ""
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            addTodo(this.state.text);
            this.setState({ text: "" });
        }
    }

    handleCheckAll() {
        checkAll();
    }

    render() {
        return (
            <div className={styles.root}>
                <button
                    className={styles.checkAllBtn}
                    onClick={this.handleCheckAll}
                >
                    <svg viewBox="0 0 44 44" width="44" height="44">
                        <polyline
                            points="10,22 18,30 34,16"
                            fill="none"
                            stroke="lightgrey"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="What needs to be done?........"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
