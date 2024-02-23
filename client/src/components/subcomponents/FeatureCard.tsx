import { ReactNode } from "react";
import { useState } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = (props: Feature) => {
  const [getHover, setHover] = useState<boolean>(false);

  return (
    <article
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      className={`bg-primary-3 hover:bg-primary-2 px-5 py-10 rounded-lg flex flex-col gap-5`}
    >
      <div className={`w-16 h-16 bg-primary-4 rounded-full p-4`}>{props.icon}</div>
      <h3 className={`text-2xl font-medium ${getHover ? `text-white` : null}`}>{props.title}</h3>
      <p className={`${getHover ? `text-white` : null}`}>{props.description}</p>
    </article>
  );
};

export default FeatureCard;
