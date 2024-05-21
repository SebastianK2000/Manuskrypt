import React, { useEffect, useRef } from 'react';
import { data } from '../data/mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import '../style/gifts.css';

interface DataItem {
    img: string;
}

export function Gifts() {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const slideLeft = () => {
        const slider = sliderRef.current;
        if (slider) {
            if (slider.scrollLeft === 0) {
                slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
            } else {
                slider.scrollLeft -= 500;
            }
        }
    };

    const slideRight = () => {
        const slider = sliderRef.current;
        if (slider) {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0;
            } else {
                slider.scrollLeft += 500;
            }
        }
    };

    const items = [...data, ...data, ...data];

    const itemStyle = {
        width: '300px',
        height: '400px'
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            const handleScroll = () => {
                if (slider.scrollLeft === 0) {
                    slider.scrollLeft = slider.scrollWidth / 3;
                } else if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                    slider.scrollLeft = slider.scrollWidth / 3;
                }
            };

            slider.addEventListener('scroll', handleScroll);
            slider.scrollLeft = slider.scrollWidth / 3;

            return () => {
                slider.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <>
            <img
                style={{ borderRadius: '10px' }}
                className='w-full h-[440px] object-cover'
                src='../Resources/frameGift.png'
                alt='Cover'
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
                <h2 style={{  }}>Choose a Book</h2>
            </div>

            <div style={{ margin: '20px' }} className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    ref={sliderRef}
                    id='slider'
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {items.map((item: DataItem, index: number) => (
                        <img
                            key={index}
                            style={itemStyle}
                            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            src={item.img}
                            alt={`Item ${index}`}
                        />
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    );
}

export default Gifts;
