import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export const BachelorThesis = () => {
  return (
    <Card className="w-full flex-row rounded-none shadow-none">
      <CardHeader shadow={false} className="m-0 w-1/2 rounded-none my-auto">
        <img
          src={"/src/assets/bachelor-thesis.png"}
          alt="picture with bachelor thesis text"
          className="w-full"
        />
      </CardHeader>
      <CardBody className="w-1/2 whitespace-pre-wrap">
        <p>Team project</p>
        <Typography variant="h4" color="blue-gray" className="mb-2 mt-0">
          Bachelor thesis
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Web application for registering and reporting of fire safety. The
          application has functionalities for registering projects through a
          form, as well as editing the projects through the form. The users can
          also export a completed Word template with the given form data to
          simplify report writing. They can also view statistics of similar
          projects. The application also has filtering, searching, and sorting
          functionalities on all available projects.
        </Typography>

        <p>
          The Bachelor thesis report can be found in NTNU Open{" "}
          <a
            href="https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3078081"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </CardBody>
    </Card>
  );
};