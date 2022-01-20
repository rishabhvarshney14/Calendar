import React  from 'react'  
import Rating from './Rating';
import Types from './Types';
import Image from './Image';

const Tile = ({data, openModal}) => {

    return (
        <div style={{cursor: "pointer"}} onClick={() => openModal(data)}>
            <Rating rating={data.rating} size="0.6em" />
            <Image imageUrl={data.media[0].mediaurl} />
            {data.typeofday !== null && <Types types={data.typeofday} font={10} size={17} />}

        </div>
    )
}

export default Tile;