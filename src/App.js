import Data from "./CarouselData"
import BtnSlider from "./BtnSlider"
import {useState} from "react"

function App() {
  const [slideIndex,setSlideIndex] = useState(1);

  const prevSlide = (()=>{
    if(slideIndex!== 1)
    setSlideIndex(slideIndex-1)
    else
    setSlideIndex(Data.length)
  })
  const nextSlide = (()=>{
    if(slideIndex!== Data.length)
    setSlideIndex(slideIndex+1)
    else
    setSlideIndex(1)
  })
  return (
    <div className="mx-auto w-9/12 container-slider">
      {
        Data.map((object,index)=>{
          return (           
            <div key={object.id} className={slideIndex === index+1 ? "slide active": "slide"}>
              <img className="mx-auto carousel-item" src={object.url} alt={`Wallpaper-${object.id}`} />
            </div>
            )
        })
      }
      <BtnSlider direction={"next"} moveSlide={nextSlide}/>
      <BtnSlider direction={"prev"} moveSlide={prevSlide}/>

    </div>
  );
}

export default App;
