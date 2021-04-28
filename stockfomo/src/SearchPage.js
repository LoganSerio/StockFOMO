import { InputText } from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import 'primeflex/primeflex.css';

const SearchPage = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchBarChange = e => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <h1>Search</h1>
            <span>
                <FontAwesomeIcon icon={faSearch} />
                <InputText value={searchQuery} onChange={handleSearchBarChange}></InputText>
            </span>
        </div>
    );
};
export default SearchPage;