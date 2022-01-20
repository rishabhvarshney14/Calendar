import React from 'react' 

const Image = ({imageUrl}) => {
    return (
        <img className='img-thumbnail' src={imageUrl} style={{border: 'none', height: 200, margin: 0, padding: 0, borderRadius: 0}} />
    )                                                                                                                                                                                                                                          
}

export default Image;