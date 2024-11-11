import { MarkusAI } from "../components/MarkusAI";
import { BachelorThesis } from "../components/BachelorThesis";
import { OfficeBook } from "../components/OfficeBook";

export const ProjectsPage = () => {
  return (
    <div className="pt-10">
      <OfficeBook />
      <MarkusAI />
      <BachelorThesis />
    </div>
  );
};
