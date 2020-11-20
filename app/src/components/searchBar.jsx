import { useState } from 'react';
import FormattedResults from './formattedResults';
import '../styles/searchBar.css';

const SearchBar = () => {
    const [userInput, setUserInput]             = useState('');
    const [searchSubmitted, setSearchSubmitted] = useState(false);
    const [latestSearch, setLatestSearch]       = useState('');
    const [searchResults, setSearchResults]     = useState([]);

    const submitSearch = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: userInput })
        };

        const response = await fetch('/search', requestOptions);
        const results  = await response.json();

        setSearchSubmitted(true);
        setLatestSearch(userInput);
        setSearchResults(results);
    }

    const updateInput = (event) => {
        setUserInput(event.currentTarget.value);
    }

    return (
        <div id='searchContainer'>
            <div id='header'>
                Search for American cities
            </div>

            <form
                name='searchBar'
                onSubmit={submitSearch}>

                <input
                    name='searchInput'
                    id='searchInput'
                    type='text'
                    autoComplete='off'
                    placeholder='City name'
                    onChange={updateInput}>
                </input>

                <button
                    type='submit'
                    className='fa fa-search'
                    id='searchButton'>
                </button>
            </form>

            { searchSubmitted &&
                (
                    latestSearch.length
                      ? <div>
                            <div id='resultsLabel'>
                                Results for "{latestSearch}":
                            </div>
                            <FormattedResults data={searchResults} />
                        </div>
                      : <div className='notice'>
                            Please enter something to search
                        </div>
                )
            }
        </div>
    );
}

export default SearchBar;
