import React from 'react';
import Carousel from './Carousel';
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import axios from "axios";

const ProjectCarousel = () => {
    const [value, setValue] = React.useState([]);

    const getData = async () => {
        const { data } = await axios.get("http://localhost:4040/showData");
        setValue(data);
        console.log(data);
    }

    React.useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Swiper className='carouselOuterContainer' modules={[Autoplay, Navigation, Pagination]} autoplay={{ delay: 2000 }} slidesPerView={1} navigation pagination={{ clickable: true }}
            >
                <div className='carousels'>
                    {
                        value.map((ele) => {
                            return (
                                <Carousel title={ele.title} img={ele.img} key={ele._id} />
                            );
                        })
                    }
                </div>
            </Swiper>
        </>
    )
}

export default ProjectCarousel