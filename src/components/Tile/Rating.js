import React from 'react' 

const Rating = ({rating, size}) => {
    return (
        <div className='text-align-center'>
            {new Array(rating).fill(0).map((item, i) => <span key={i} class="fa fa-star" style={{color: "aqua", fontSize: size }}></span>)}
            {5 - rating !== 0 && new Array(5 - rating).fill(0).map((item, i) => <span key={i} class="fa fa-star" style={{color: "gray", fontSize: size}}></span>)}
        </div>
    )
} 

export default Rating;