import React, { useEffect, useState } from "react";
import Slider from "react-slick";


const Slider1 = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(
          "https://api.thedogapi.com/v1/breeds?limit=10&page=0"
        );
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDogData();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {dogs.map((item) => {
          return (
            <div className="singleslider">
                <img src={item.image.url} alt="" />
              </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slider1;
