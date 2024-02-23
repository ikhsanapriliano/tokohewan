import Mammalia from "../../assets/Mammalia.jpg";
import Reptilia from "../../assets/Reptilia.jpg";
import Aves from "../../assets/Aves.jpg";
import Insecta from "../../assets/Insecta.jpg";
import Amphibia from "../../assets/Amphibia.jpg";
import Mollusca from "../../assets/Mollusca.jpg";
import Arachnida from "../../assets/Arachnida.jpg";
import Chondrichthyes from "../../assets/Chondrichthyes.jpg";
import Echinodermata from "../../assets/Echinodermata.jpg";
import Osteichthyes from "../../assets/Osteichthyes.jpg";
import Chilopoda from "../../assets/Chilopoda.jpg";
import Peliharaan from "../../assets/Peliharaan.jpg";
import Peternakan from "../../assets/Peternakan.jpg";
import Kurban from "../../assets/Kurban.jpg";
import Militer from "../../assets/Military.jpg";
import Material from "../../assets/Material.jpg";
import Darat from "../../assets/Darat.jpg";
import Laut from "../../assets/Laut.jpg";
import Udara from "../../assets/Udara.jpg";

type Name = {
  name: string;
};

type Categories = {
  [key: string]: string;
};

const CategoryCard = (props: Name) => {
  const categories: Categories = {
    Mammalia: Mammalia,
    Aves: Aves,
    Reptilia: Reptilia,
    Amphibia: Amphibia,
    Osteichthyes: Osteichthyes,
    Chondrichthyes: Chondrichthyes,
    Arachnida: Arachnida,
    Insecta: Insecta,
    Mollusca: Mollusca,
    Echinodermata: Echinodermata,
    Chilopoda: Chilopoda,
    Peliharaan: Peliharaan,
    Peternakan: Peternakan,
    Militer: Militer,
    "Hewan Kurban": Kurban,
    Material: Material,
    Darat: Darat,
    Air: Laut,
    Udara: Udara,
  };

  const category: string = props.name;

  return (
    <article className={`flex flex-col gap-5 p-5 justify-center items-center bg-primary-4 rounded-md w-60 cursor-pointer hover:scale-105 hover:bg-primary-3 duration-100`}>
      <div className={`rounded-full overflow-hidden`}>
        <img src={categories[category]} alt="hewan" />
      </div>
      <p>{category}</p>
    </article>
  );
};

export default CategoryCard;
