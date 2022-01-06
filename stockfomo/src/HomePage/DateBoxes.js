import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateBoxes = (props) => {
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // const changeStartValue = e => {
    //     setStartValue(e.target.value);
    // }
    // const changeEndValue = e => {
    //     setEndValue(e.target.value);
    // }
    return (
        <div className='container-fluid'>
            <div className="dates row">
                <div className='dateField col-5'>
                    <DatePicker id='dateBox' placeholderText='Enter start date' selected={startDate} onChange={(date) => setStartDate(date)} popperPlacement="top-end" />
                    {/* <input
                        id='searchBox'
                        type="text"
                        value={startValue}
                        placeholder='Enter start date'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter start date'}
                        onChange={changeStartValue}
                    /> */}
                </div>
                <div className='dateField col-5'>
                <DatePicker id='dateBox' placeholderText='Enter end date' selected={endDate} onChange={(date) => setEndDate(date)} popperPlacement="top-end" />
                    {/* <input
                        id='searchBox'
                        type="text"
                        value={endValue}
                        placeholder='Enter end date'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter end date'}
                        onChange={changeEndValue}
                    /> */}
                </div>
            </div>
        </div>
    );
};
export default DateBoxes;