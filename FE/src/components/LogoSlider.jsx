import React from "react";
import Slider from "react-infinite-logo-slider";

const LogoSlider = () => {
    return (
      <div>
        <Slider
          width="200px"
          duration={20}
          pauseOnHover={false}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide className="bg-black">
            <img src="/whitelogo.png" alt="any" className="w-36" />
          </Slider.Slide>
        </Slider>
      </div>
    );
};

export default LogoSlider;
