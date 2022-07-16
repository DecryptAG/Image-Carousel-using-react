import React from 'react';

export default function BtnSlider ({direction, moveSlide}) {
    console.log(direction,moveSlide);
  return (
    <button         
    onClick={moveSlide}
    className={direction === "next"? "btn-slide next" : "btn-slide prev"}>
         <img src={direction==="next"? "next.png":"prev.png"} alt="Bhai kuch to hai" />
    </button>
  )
}
