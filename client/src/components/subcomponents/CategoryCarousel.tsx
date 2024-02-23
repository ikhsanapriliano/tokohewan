import { Carousel } from "flowbite-react";
import CategorySlide from "./CategorySlide";

interface Category {
  category: Array<string>;
}

const CategoryCarousel = (props: Category) => {
  const generateSlide = () => {
    const slide = [];
    for (let i = 1; i <= props.category.length; i++) {
      if (i % 4 === 0) {
        const items = props.category.slice(i - 4, i);
        console.log(items);
        slide.push(<CategorySlide items={items} />);
      } else if (i === props.category.length && i % 4 !== 0) {
        const itemsLeft = i % 4;
        const items = props.category.slice(i - itemsLeft, i);
        console.log(items);
        slide.push(<CategorySlide items={items} />);
      }
    }
    return slide;
  };

  return (
    <section className="h-56 sm:h-64 xl:h-80 2xl:h-96 text-black border-b" id="category_list">
      <Carousel slide={false} indicators={false} onSlideChange={(index) => console.log("onSlideChange()", index)}>
        {generateSlide()}
      </Carousel>
    </section>
  );
};

export default CategoryCarousel;
