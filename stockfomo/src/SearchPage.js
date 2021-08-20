import { InputText } from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import 'primeflex/primeflex.css';
import Banner from './Banner';
import SearchBox from './SearchBox';
import DateBoxes from './DateBoxes';

const SearchPage = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchBarChange = e => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <Banner />
            <SearchBox />
            <DateBoxes />
        </div>
    );
};
export default SearchPage;