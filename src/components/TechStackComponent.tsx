import { TechStackIconData } from "../utils/types";

export const TechStackComponent = ({ data }: { data: TechStackIconData }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <img className="w-16" src={data.icon} alt={data.altText} />
        <p>{data.text}</p>
      </div>
    </>
  );
};
