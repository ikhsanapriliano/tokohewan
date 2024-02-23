import gambar from "../../assets/Aves.jpg";
import { Rating } from "flowbite-react";

const ProductCard = () => {
  return (
    <article className={`w-[200px] h-[270px] rounded-lg overflow-hidden shadow-2xl bg-white hover:scale-105 duration-100 relative`}>
      <div className={`overflow-hidden w-full h-[170px]`}>
        <img className={`scale-[250%] mx-auto mt-16`} src={gambar} />
      </div>
      <div className={`px-3 py-5`}>
        <h4 className={`text-xs w-full h-4 overflow-hidden`}>Burung Beo Bertulang Lima asdsada</h4>
        <p>Rp. 300.000</p>
        <Rating>
          <Rating.Star />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            73 reviews
          </a>
        </Rating>
      </div>
      <div className={`bg-primary-2 text-white absolute bottom-[90px] right-0 px-5 py-1`}>Diskon 90%</div>
    </article>
  );
};

export default ProductCard;
