import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SubmitButton = (props) => {
    const [value, setValue] = useState('');

    const changeValue = e => {
        setValue(e.target.value);
    }
    return (
        <div className='field clearfix'>
            <Link to='resultspage'>
                <button className='btn btn-primary'>What did I miss?&nbsp;<FontAwesomeIcon className='float-right' id='submit' size='lg' icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};
export default SubmitButton;