import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../css/SearchForm.css';

const SearchForm = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/search?q=' + query);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search" type='text' onChange={(e) => { setQuery(e.target.value) }} placeholder="Search"></input>
            <input className="button" type='submit' value="buscar"></input>
        </form >
    )
}

export default SearchForm