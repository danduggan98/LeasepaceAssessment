import { useState } from 'react';
import FormattedResults from './formattedResults';
import '../styles/searchBar.css';

const SearchBar = () => {
    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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
        setSearchResults(results);
    }

    const updateInput = (event) => {
        setUserInput(event.currentTarget.value);
    }

    return (
        <div id='searchContainer'>
            <span>Search for American Cities</span>

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
                    id='searchButton'>
                        Search
                </button>
            </form>

            <FormattedResults data={searchResults} />
        </div>
    )
}

export default SearchBar;
