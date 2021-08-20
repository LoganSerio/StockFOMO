import {TextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBox = (props) => {
    const [value, setValue] = useState('');

    const changeValue = e => {
        setValue(e.target.value);
    }
    return (
        <div className='field'>
            <input
                id='searchBox'
                type="text"
                value={value}
                placeholder='Enter a ticker and get started...'
                onChange={changeValue}
             />
        </div>
    );
};
export default SearchBox;