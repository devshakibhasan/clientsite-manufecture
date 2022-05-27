import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.png';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='slider-text'>

                    <p>
                        Continuously inspired time
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption className='slider-text'>

                    <p>
                        Need
                    </p>
                    <p>
                        New Tools?
                    </p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />
                <Carousel.Caption className='slider-text'>

                    <p>
                        Need
                    </p>
                    <p>
                        New Tools?
                    </p>
                </Carousel.Caption>

            </Carousel.Item>
      
        </Carousel>
    );
};

export default Banner;