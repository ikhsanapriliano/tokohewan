import CategoryCarousel from "./subcomponents/CategoryCarousel";

const Categories = () => {
  const kelas = ["Mammalia", "Aves", "Reptilia", "Amphibia", "Osteichthyes", "Chondrichthyes", "Arachnida", "Insecta", "Mollusca", "Echinodermata", "Chilopoda"];

  const habitat = ["Darat", "Air", "Udara"];

  const kegunaan = ["Peliharaan", "Peternakan", "Militer", "Hewan Kurban", "Material"];

  return (
    <section className={`bg-[#f5f5f5] flex justify-center items-center py-10`}>
      <div className={`w-[1240px] bg-white`}>
        <h3 className="p-5 border-b">Cari Berdasarkan Kategori</h3>
        <p className={`px-20 pt-10`}>Kelas</p>
        <CategoryCarousel category={kelas} />
        <p className={`px-20 pt-10`}>Kegunaan</p>
        <CategoryCarousel category={kegunaan} />
        <p className={`px-20 pt-10`}>Habitat</p>
        <CategoryCarousel category={habitat} />
      </div>
    </section>
  );
};

export default Categories;
