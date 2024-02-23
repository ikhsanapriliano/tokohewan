import { Carousel } from "flowbite-react/lib/esm/components/Carousel";
import Banner1 from "../../assets/banner-1.jpg";
import Banner2 from "../../assets/banner-2.jpg";
import Banner3 from "../../assets/banner-3.jpg";

const FeatureCarousel = () => {
  return (
    <div className="h-full">
      <Carousel>
        <img src={Banner1} alt="gambar" />
        <img src={Banner2} alt="gambar" />
        <img src={Banner3} alt="gambar" />
      </Carousel>
    </div>
  );
};

export default FeatureCarousel;
