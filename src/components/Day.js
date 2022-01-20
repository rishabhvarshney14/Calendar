import dayjs from 'dayjs';
import React, {useRef, useEffect} from 'react'
import isToday from 'dayjs/plugin/isToday'
import Tile from './Tile/Tile';

dayjs.extend(isToday)

const Day = ({day, openModal}) => {
    const ref = useRef(null);


    useEffect(() => {
        const checkDate = () => {
            if (day[0].isToday())
                ref.current.scrollIntoView({ block: 'center'});
        }

        checkDate();
    }, [])

    return (
        <div ref={ref} className='col border text-center' style={{height: 300, backgroundColor: `rgba(217, 217, 217, ${0.01 * day[0].format("D")})`}}>
            <p>{day[0].format("D") == "1" ? day[0].format("D") + " " + day[0].format("MMM") : day[0].format("D")} </p>

            {day.length === 2 && <Tile data={day[1]} openModal={openModal} />}
        </div>
    )
}

export default Day