import { useState, useEffect } from 'react'

const SearchBar = () => {
    const devHost = 'localhost:2000'; //Temporary location of dev server - change for production
    const [userInput, setUserInput] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
    }

    const updateInput = (event) => {
        setUserInput(event.currentTarget.value);
    }

    return (
        <div id='searchContainer'>
            <span>Search for American Cities</span>

            <form
                name='searchBar'
                onSubmit={submitForm}>

                <input
                    name='searchInput'
                    id='searchInput'
                    type='text'
                    autoComplete='off'
                    placeholder='City name'
                    onChange={updateInput}>
                </input>
            </form>

            <div>{userInput}</div>
        </div>
    )
}

export default SearchBar;
