import CategoryCard from "./CategoryCard";

interface Items {
  items: Array<string>;
}

const CategorySlide = (props: Items) => {
  return (
    <div className="px-20 py-5 flex h-full gap-10">
      {props.items.map((item, index) => {
        return <CategoryCard key={index} name={item} />;
      })}
    </div>
  );
};

export default CategorySlide;
