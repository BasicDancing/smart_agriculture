import { useState } from "react";
import Calendar from 'react-calendar';
import "./CustomCalendar.scss"
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='mainApp'>
            <h1 className='text-center'>Monthly Calendar</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
};

export default CustomCalendar;