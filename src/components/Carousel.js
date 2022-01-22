import React, { useState, useEffect } from 'react' 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './Tile/Card';

const Carousel = ({data, modalData}) => {
    const [items, setItems] = useState([])
    const [index, setIndex] = useState(0)

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    useEffect(() => {
        const createItems = () => {
            const tempItems = Object.values(data).map(((item, idx) => {
                if (modalData && item.id === modalData.id) {
                    setIndex(idx);
                }
                return <Card data={item} />
            }))
            setItems(tempItems)
        }

        createItems()
    }, [data])
    
    return (
        <div className='pt-2'>
        {items.length > 0 && <AliceCarousel
                activeIndex={index}
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