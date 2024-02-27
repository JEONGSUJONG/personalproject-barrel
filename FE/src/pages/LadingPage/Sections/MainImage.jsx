import SimpleImageSlider from "react-simple-image-slider";
import LogoSlider from "../../../components/LogoSlider";

const backgroundImg = [
  { url: "/1.jpg" },
  { url: "/2.jpg" },
  { url: "/3.jpg" },
  { url: "/4.jpg" },
  { url: "/5.jpg" },
];

const MainImage = () => {
  return (
    <div className="w-[100vw] h-[100%] pt-[80px]">
      <LogoSlider />
      <div className="max-w-[100%]">
        <SimpleImageSlider
          width={`100%`}
          height={`80vh`}
          images={backgroundImg}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={2.0}
        />
      </div>
      <LogoSlider />
    </div>
  );
};

export default MainImage;
