import { InputText } from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import 'primeflex/primeflex.css';
import Banner from './Banner';
import SearchBox from './SearchBox';
import DateBoxes from './DateBoxes';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const SearchPage = (props) => {
    const [ticker, setTicker] = useState('');

    const handleSearchBarChange = updatedQuery => {
        setTicker(updatedQuery);
    };

    return (
        <motion.div 
            initial={{ x: -1000 }} 
            animate={{ x: 0 }} 
            exit={{ x: -1000 }}
            transition={{ duration: 0.3 }}
        >
            <div>
                <Banner />
                <SearchBox updateTicker={handleSearchBarChange} />
                <DateBoxes />
                <SubmitButton />
                {/* <Link to='resultspage'>
                    Go to Page 2
                </Link> */}
            </div>
        </motion.div>
    );
};
export default SearchPage;