import React from "react";
import Slider from "react-slick";

function HomeCategory() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true, // Ensures width is flexible
        autoplay: false, // Enables auto-scroll
        autoplaySpeed: 2000,
    };

    const slides = [
        {
          img: "https://api.spicezgold.com/download/file_1734525204708_fash.png",
          title: "Fashion",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
          title: "Electronics",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
          title: "Bags",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525239704_foot.png",
          title: "Footwear",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525286186_jw.png",
          title: "Footwear",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525275367_well.png",
          title: "Footwear",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525255799_beauty.png",
          title: "Footwear",
        },
        {
          img: "https://api.spicezgold.com/download/file_1734525248057_gro.png",
          title: "Footwear",
        },
    ];


    return ( 
      <>
        <section class="homeCat pb-5">
          <div class="container">
            <h3 class="mb-3 hd">Featured Categories</h3>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}  style={{ width: "147.25px", "margin-right": "10px"  }}>
                    <a href="#">
                        <div className="item text-center cursor" style={{ background: "rgb(236, 255, 236)" }}>
                            <img src={slide.img} alt={slide.title} />
                        </div>
                        <h6>{slide.title}</h6>
                    </a>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </>
    );
}

export default HomeCategory;