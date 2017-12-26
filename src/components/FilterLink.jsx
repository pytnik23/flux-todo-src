import React, { Component } from 'react';

import { setVisibilityFilter } from '../actions';

import FilterStore from '../stores/FilterStore';

import styles from './FilterLink.less';

export default class FilterLink extends Component {
    componentWillMount() {
        FilterStore.on('filter', () => {
            this.forceUpdate();
        });
    }

    handleClick(filter) {
        setVisibilityFilter(filter);
    }

    render() {
        const { active, children, filter } = this.props;

        if (FilterStore.getFilter() === filter) {
            return <span className={styles.active}>{children}</span>;
        }

        return <span className={styles.root} onClick={() => this.handleClick(filter)}>{children}</span>;
    }
}
