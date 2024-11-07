import { ProjectCard } from "../components/ProjectCard";

export const ProjectsPage = () => {
  const data = [
    {
      image: "/src/assets/officebook_pictures/officebook main page.png",
      type: "",
      name: "OfficeBook",
      description: "simple office booking system",
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
      description: "office supply management system",
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
    {
      image: "/src/assets/bachelor-thesis.png",
      type: "Team project",
      name: "Bachelor thesis",
      description:
        "Web application for registering and reporting of fire safety",
      links: [],
    },
  ];

  return (
    <div className="space-y-5 py-10">
      {data.map((element, index) => (
        <ProjectCard key={index} data={element} />
      ))}
    </div>
  );
};
