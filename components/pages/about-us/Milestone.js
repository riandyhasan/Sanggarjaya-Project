import { Flex, Heading } from "@chakra-ui/react";
import { Chrono } from "react-chrono";

export default function Milestone() {
  const data = [
    {
      title: "1995",
      cardDetailedText:
        "In 1995, in the city of Surabaya, CV. Sanggar Electro was established which is engaged in Electrical & Mechanical Workshop.",
    },
    {
      title: "1996",
      cardDetailedText:
        "Seeing the prospect of the textile factory at that time growing very promising, in 1996 CV. Sanggar Electro decided to move to Bandung.",
    },
    {
      title: "2000",
      cardDetailedText:
        "In 2000 CV. Sanggar Electro started trying to develop a new business in the Manufacturing sector.",
    },
    {
      title: "2010",
      cardDetailedText:
        "In 2010 CV. Sanggar Electro has the full trust of PT. Summi Rubber Indonesia to handle all the company's manufacturing work.",
    },
    {
      title: "2011",
      cardDetailedText:
        "In 2011 PT. Sanggar Jaya was established, CV. Sanggar Electro is more focused on Electrical & Mechanical Workshop, while PT. Sanggar Jaya Abadi more focused on the manufacturing sector.",
    },
    {
      title: "2012",
      cardDetailedText:
        "At the beginning of 2012 we were really ready with the equipment needed to make telephone poles that meet the standards.",
    },
    {
      title: "2013",
      cardDetailedText:
        "In 2013 not less than 15 customers/ contractors became our regular customers with a daily production capacity of around 750 poles.",
    },
    {
      title: "2014",
      cardDetailedText:
        "In 2014 we occupied a new factory with an area of about 2 hectares. In the same year we started to enter PT. Telkom through its subsidiary PT. Telkom Indonesia. Therefore, our production has doubled, which is around 1500 poles per day.",
    },
    {
      title: "2020",
      cardDetailedText:
        "In 2020 the number of our customers is more than 40 providers and contractors, with a total production of almost 3500 poles per day.",
    },
    {
      title: "2021",
      cardDetailedText:
        "In 2021 we will build a new factory with an area of 2.5 hectares which is still under construction.",
    },
    {
      title: "2022",
      cardDetailedText:
        "In June 2022, the new factory is targeted to start operating, with the operation of the new factory, the total production of PT. Sanggar Jaya Abadi is targeted to be 5000 to 6000 poles per day.",
    },
  ];

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      w="100%"
      py="3rem"
      px="3rem"
      bg="#FBFBFB"
    >
      <Heading
        color="primary.black"
        size="2xl"
        borderBottom="5px solid #077F46"
        maxW="35%"
      >
        Milestone
      </Heading>
      <Flex
        w="100%"
        h="70vh"
        justifycard="center"
        alignItems="center"
        mt="2rem"
      >
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "#077F46",
            secondary: "#F18720",
            cardBgColor: "white",
            cardForeColor: "black",
            titleColor: "white",
          }}
        />
      </Flex>
    </Flex>
  );
}
