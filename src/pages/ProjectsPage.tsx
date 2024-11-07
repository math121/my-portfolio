import { MarkusAI } from "../components/MarkusAI";
import { BachelorThesis } from "../components/BachelorThesis";
import { OfficeBook } from "../components/OfficeBook";

export const ProjectsPage = () => {
  return (
    <div className="space-y-5 py-10">
      <OfficeBook />
      <MarkusAI />
      <BachelorThesis />
    </div>
  );
};
