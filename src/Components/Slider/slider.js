import React from "react";
import Carousel from "react-bootstrap/Carousel";

const bannerData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/flat-food-sale-background_23-2149175437.jpg",
    label: "50% off on Classic Pizza",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/a5/70/38/a570380fc036fe2b7d9506f5e2923587.jpg",
    label: "30% off on buy 2 get 1",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg",
    label: "50% off on family pizza on weekend only ",
  },
];

function Slider() {
  

  return (
    <Carousel >
      {bannerData.length>0 ?
        bannerData.map((d, i) => (
          <Carousel.Item  key={`"offer-slider-home-page-${d.id}`}  >
            <img  className="d-block w-100" src={d?.image} alt="first image" />
            <Carousel.Caption>
              <h3>{d?.label}</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
        )):null}
    </Carousel>
  );
}
 

export default Slider;
