import React, { useState, useEffect } from 'react' 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './Tile/Card';

const Carousel = ({data}) => {
    const [items, setItems] = useState([])
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    useEffect(() => {
        const createItems = () => {
            const tempItems = Object.values(data).map((item => <Card data={item} />))
            setItems(tempItems)
        }

        createItems()
    }, [data])
    
    return (
        <div className='pt-2'>
        {items.length > 0 && <AliceCarousel
                infinite={true}
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />}
        </div>
    )
}

export default Carousel;