import { useState } from 'react';

const DateBoxes = (props) => {
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const changeStartValue = e => {
        setStartValue(e.target.value);
    }
    const changeEndValue = e => {
        setEndValue(e.target.value);
    }
    return (
        <div className='container-fluid'>
            <div className="dates row">
                <div className='dateField col-5'>
                    <input
                        id='searchBox'
                        type="text"
                        value={startValue}
                        placeholder='Enter start date'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter start date'}
                        onChange={changeStartValue}
                    />
                </div>
                <div className='dateField col-5'>
                    <input
                        id='searchBox'
                        type="text"
                        value={endValue}
                        placeholder='Enter end date'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter end date'}
                        onChange={changeEndValue}
                    />
                </div>
            </div>
        </div>
    );
};
export default DateBoxes;