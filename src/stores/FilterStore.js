import EventEmitter from 'events';
import dispatcher from '../dispatcher';

let filter = 'SHOW_ALL';

const FilterStore = Object.assign({}, EventEmitter.prototype, {
    setFilter(str) {
        filter = str;

        FilterStore.emit('filter');
    },

    getFilter() {
        return filter;
    },

    handleActions(action) {
        switch (action.type) {
            case 'SET_VISIBILITY_FILTER': {
                this.setFilter(action.filter);
                break;
            }
        }
    }
});

dispatcher.register(FilterStore.handleActions.bind(FilterStore));
export default FilterStore;
