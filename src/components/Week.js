import React, { useState } from 'react' 
import Day from './Day'

const Week = ({week, openModal, setDate}) => {
    return (
            <div className='row g-0'>
                {week.map((day, i) => <Day day={day} key={i} openModal={openModal} setDate={setDate} />)}
            </div>
    )
}

export default Week