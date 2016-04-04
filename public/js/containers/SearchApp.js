import React, {Component} from 'react';
import SearchForm from 'js/components/SearchForm';
import SearchResults from 'js/components/SearchResults';
import SearchPagination from 'js/components/SearchPagination';
import ModalContainer from 'js/components/ModalContainer';
import LoaderContainer from 'js/containers/LoaderContainer';
import FilterContainer from 'js/components/FilterContainer';

// Class Container Component for SearchApp
const SearchApp = React.createClass({
     render() {

        return (
            <div id="appContainer" className="ui segment">

                <SearchForm />

                <FilterContainer />

                <SearchResults />

                <SearchPagination />

                <ModalContainer />

                <LoaderContainer />

            </div>
        )
    }
});

module.exports = SearchApp;
