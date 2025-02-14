import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <>
            <div className="homeBannerSection"> 
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" alt="sliderImg" className="w-100" />
                    </div>
                    <div className="item">            
                        <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="sliderImg" className="w-100" />
                    </div>
                    <div className="item">            
                        <img src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg" alt="sliderImg" className="w-100" />
                    </div>
                </Slider>
            </div>
        </>
    )           
    
}

export default HomeBanner