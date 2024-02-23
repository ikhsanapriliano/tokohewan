import heroImage from "../assets/bg-hero.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className={`h-screen overflow-hidden relative`}>
      <img className={`absolute top-0 right-0 bottom-0 left-0 w-full`} src={heroImage} />
      <section className={`relative h-full w-[1240px] mx-auto`}>
        <nav className={`text-white absolute left-0 right-0`}>
          <div className={`flex pt-5 justify-between`}>
            <h1 className={`text-2xl font-semibold`}>Tokohewan</h1>
            <ul className={`flex gap-5`}>
              <li>Daftar</li>
              <li>Masuk</li>
            </ul>
          </div>
        </nav>
        <article className={`text-white h-full flex flex-col justify-center items-center`}>
          <h1 className={`text-5xl font-bold mt-10 mb-2`}>Platform Jual Beli Hewan No. #1 di Indonesia</h1>
          <h2 className={`text-xl`}>Mulai Dari Hewan Peliharaan, Hewan Liar, dan Hewan Apapun yang Anda Inginkan!</h2>
          <form className={`bg-white p-1 rounded-full overflow-hidden w-2/5 flex justify-between mt-10`}>
            <input type="text" className={`text-black px-5 w-full border-none focus:outline-none`} />
            <button type="submit" className={`py-3 px-6 rounded-full bg-primary-2 hover:bg-primary-1 text-white flex gap-2 justify-center items-center`}>
              <MagnifyingGlassIcon className={`w-5 h-5`} />
              <p>Cari</p>
            </button>
          </form>
          <div className={`flex gap-5 mt-10 justify-center items-center`}>
            <p className={`font-medium text-lg`}>Sering Dicari : </p>
            <ul className={`flex gap-5`}>
              <li className={`border border-white rounded-full py-1 px-7`}>Kucing</li>
              <li className={`border border-white rounded-full py-1 px-7`}>Anjing</li>
              <li className={`border border-white rounded-full py-1 px-7`}>Ular</li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Hero;
