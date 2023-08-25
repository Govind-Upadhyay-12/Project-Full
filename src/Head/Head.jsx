import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Correct path
import 'swiper/components/navigation/navigation.min.css'; // Correct path
import 'swiper/components/pagination/pagination.min.css'; // Correct path
import 'swiper/components/scrollbar/scrollbar.min.css'; // Correct path
import './Head.scss';
import img1 from '../images/roberto-sorin-RS0-h_pyByk-unsplash.jpg';
import img2 from '../images/eduardo-soares-e4EmPx91Aj4-unsplash.jpg';
import img3 from '../images/peter-bond-KfvknMhkmw0-unsplash.jpg';
import img4 from '../images/damla-ozkan-psy-nI3562c-unsplash.jpg';

const Head = () => {
    const images = [img1, img2, img3, img4];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                    <img src={imgSrc} alt={`Image ${index}`} width={1510} height={500} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Head;
