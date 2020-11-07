import React, { useState } from "react";
import "./carousel.min.css";

export const Carousel = (props) => {
   const { data } = props;
   const [slide, setSlide] = useState(0);
   var carouselIndex = -1;
   const pageContent = data.map((carouselItem) => {
      carouselIndex++;
      if (carouselIndex === slide) {
         return (
            <div className="carousel-item active" key={carouselItem.id}>
               <h1>{carouselItem.name}</h1>
               <div className="page-number">
                  {slide}/{data.length}
               </div>
               <img src={carouselItem.picture} alt={carouselItem.name} />
            </div>
         );
      }
      return <div className="carousel-item">{carouselItem.name}</div>;
   });

   carouselIndex = -1;
   const dots = data.map((dot) => {
      const index = ++carouselIndex;
      if (carouselIndex === slide) {
         return (
            <span
               className="dot active-dot"
               onClick={() => setSlide(index)}
               key={dot.id}
            ></span>
         );
      }
      return (
         <span
            className="dot"
            onClick={() => setSlide(index)}
            key={dot.id}
         ></span>
      );
   });

   return (
      <div className="carousel">
         {pageContent}
         <span
            className="nav prev"
            onClick={() => setSlide((slide - 1 + data.length) % data.length)}
         >
            &#10094;
         </span>
         <span
            className="nav next"
            onClick={() => setSlide((slide + 1) % data.length)}
         >
            &#10095;
         </span>
         <div className="dots">{dots}</div>
      </div>
   );
};
