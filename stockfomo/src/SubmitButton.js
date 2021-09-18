import { useState } from 'react';

const SubmitButton = (props) => {
    const [value, setValue] = useState('');

    const changeValue = e => {
        setValue(e.target.value);
    }
    return (
        <div className='field'>
            <button className='btn btn-primary'>dsd</button>
        </div>
    );
};
export default SubmitButton;