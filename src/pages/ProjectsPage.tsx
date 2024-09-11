import {
  Carousel,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const ProjectsPage = () => {
  const data = [
    {
      label: "OfficeBook",
      value: "officebook",
      content: [
        "officebook main page.png",
        "officebook login page.png",
        "officebook booking page.png",
        "officebook my bookings page.png",
        "officebook sign up page.png",
        "officebook register page.png",
      ],
    },
    {
      label: "MarkusAI",
      value: "markusai",
      content: [],
    },
  ];

  return (
    <div>
      <Tabs value="officebook" orientation="vertical">
        <TabsHeader
          className="w-32"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value} className="py-0">
              <Carousel
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {content.map((pic, index) => (
                  <img
                    key={index}
                    className="h-full w-full object-cover"
                    src={`/src/assets/officebook_pictures/${pic}`}
                    alt="Main page picture of OfficeBook"
                  />
                ))}
              </Carousel>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
