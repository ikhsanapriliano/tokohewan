import ProductCard from "./subcomponents/ProductCard";

const Discounts = () => {
  return (
    <section className="flex flex-col justify-center items-center p-10 border-b">
      <div className={`w-[1240px]`}>
        <h2 className={`pb-5`}>Beli Tanpa Mikir</h2>
        <div className={`relative`}>
          <div className={`bg-primary-2 w-72 h-80 text-white flex items-center p-10 rounded-xl text-lg`}>
            Diskon
            <br />
            90%
          </div>
          <div className={`absolute top-0 h-full flex items-center gap-5 right-0`}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
