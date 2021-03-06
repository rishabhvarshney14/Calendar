import dayjs from 'dayjs';
import React from 'react' 
import Rating from './Rating';
import Types from './Types';

const Card = ({data}) => {
    const date = dayjs(data.calendardatetime)
    return (
        <div className="d-flex flex-column justify-content-between" style={{width: 300, height: 650}}>
            <div>
                <div className="text-center">
                    <img src={data.media[0].mediaurl} style={{width: 300, height: 400}} />
                </div>

                <div className="d-flex justify-content-between pt-2" >
                    {data.typeofday !== null ? <Types types={data.typeofday} font={15} size={25} /> : <div style={{height: 15, width: 15}}></div>}
                    <Rating rating={data.rating} size="1.2em" />
                </div>

                <h4>{date.format('DD')} {date.format('MMMM')}</h4>

                <p>{data.text}</p>
            </div>

            <div className='text-center pt-1' style={{borderTop: "1px solid black", backgroundColor: "lightgray"}}>
                <h4>View Full Post</h4>
            </div>
        </div>
    )
}

export default Card;