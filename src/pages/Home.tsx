import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../style/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IonIcon } from '@ionic/react';

import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../Resources/01.jpg';
import slide_image_2 from '../../Resources/2.jpg';
import slide_image_3 from '../../Resources/02.jpg';
import slide_image_4 from '../../Resources/3.jpg';
import slide_image_5 from '../../Resources/03.jpg';
import slide_image_6 from '../../Resources/1.jpg';
import slide_image_7 from '../../Resources/4.jpg';

const Home = () => {
    return (
        <Container style={{height: '120vh'}} >
            <div className="containerSliderHome">
                <h1 className="heading">Bestseller in this week!</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={slide_image_1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_6} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_7} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <IonIcon icon={arrowBackOutline} />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <IonIcon icon={arrowForwardOutline} />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </Container>
    );
}

export default Home;
