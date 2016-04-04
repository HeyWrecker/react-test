import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'js/configureStore';
import SearchApp from 'js/containers/SearchApp';
import SearchForm from 'js/components/SearchForm';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <SearchApp />
            </Provider>
        )
    }
}
