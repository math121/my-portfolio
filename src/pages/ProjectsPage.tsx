import { ProjectCard } from "../components/ProjectCard";
import { BachelorThesis } from "../components/BachelorThesis";

export const ProjectsPage = () => {
  const data = [
    {
      image: "/src/assets/officebook_pictures/officebook main page.png",
      type: "",
      name: "OfficeBook",
      description:
        "A web application where users can book or register office spaces." +
        "Made during my hack week at the salt bootcamp. \nFunctionalties:" +
        "\n- Book office spaces \n- Filter offices by location \n- Edit/Delete bookings" +
        "\n- View your current/previous bookings \n- Register new office spaces",
      points: [],
      links: [
        {
          name: "Frontend",
          link: "https://github.com/math121/office-booking-frontend",
        },
        {
          name: "Backend",
          link: "https://github.com/math121/office-booking-backend",
        },
      ],
    },
    {
      image: "/src/assets/markusai_pictures/home-page.png",
      type: "Team project",
      name: "MarkusAI",
      description:
        "An office supply management application where users can check the inventory" +
        "and request for more supplies which then needs to get approved by an admin to send out an order.",
      links: [
        {
          name: "Frontend",
          link: "https://github.com/masagal/MarkusAI-frontend",
        },
        {
          name: "Backend",
          link: "https://github.com/masagal/MarkusAI-backend",
        },
      ],
    },
  ];

  return (
    <div className="space-y-5 py-10">
      {data.map((element, index) => (
        <ProjectCard key={index} data={element} />
      ))}
      <BachelorThesis />
    </div>
  );
};
