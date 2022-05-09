import { useState } from "react";
import { Flex, Heading, Text, Grid, GridItem, Box } from "@chakra-ui/react";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const Docs = ({ title, desc }) => {
  return (
    <Flex flexDir="column" gridGap="0.5rem">
      <Heading size="md" color="primary.green">
        {title}
      </Heading>
      <Text fontWeight={600} fontFamily="Hind" color="primary.black">
        {desc}
      </Text>
    </Flex>
  );
};

export default function LegalInformation() {
  const [showMore, setShowMore] = useState(false);

  let legal = [
    { title: "Akta. Kehakiman", desc: "NO. C-294.HT.03,01-TH 2002" },
    { title: "NPWP", desc: "03.194.772.4-444.000" },
    { title: "Akta. Pertanahan", desc: "277-XVII/2006" },
    { title: "SK. Domisili", desc: "503/1491/DS/X/2016" },
    { title: "TDP", desc: "10.12.5.47.00" },
    { title: "SKT Pajak", desc: "S-1120KT/WPJ.09/KP.1503/2018" },
    { title: "SIUP", desc: "503.SIUP/324/10.13/BPMPT/PK/XII/2016" },
    { title: "SK. Kehakiman", desc: "AHU-57374.AH.01.01.Tahun 2011" },
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
        maxW={{ base:"95%", md:"35%" }}
      >
        Legal Information
      </Heading>
      <Grid
        display={{ base:"grid" , md: "none"}}
        gridTemplateColumns="repeat(1, 1fr)"
        columnGap={150}
        rowGap={10}
        py="3rem"
        alignItems="center"
        w="100%"
      >
        {legal.map((item, i) => (
          i <=  2 ?
          <GridItem>
            <Docs title={item.title} desc={item.desc} />
          </GridItem>
          :
          showMore ? 
          <GridItem>
            <Docs title={item.title} desc={item.desc} />
          </GridItem>
          :
          null
        ))}
      </Grid>
      <Grid
        display={{ base:"none" , md: "grid"}}
        gridTemplateColumns="repeat(2, 1fr)"
        columnGap={150}
        rowGap={10}
        py="3rem"
        alignItems="center"
        w="100%"
      >
        {legal.map((item, i) => (
          <GridItem>
            <Docs title={item.title} desc={item.desc} />
          </GridItem>
        ))}
      </Grid>
      <Box display={{ base: "flex", md: "none" }} w="100%" justifyContent="center">
          <Flex alignItems="center" fontSize="1.1em" gridGap="1rem" onClick={() => setShowMore(!showMore)}>
            {showMore ?
            <>
              <IoIosArrowDropupCircle size="2em" color="#077F46" />
              <Text color="primary.black" fontWeight="bold">See Less</Text>
            </>

            :
            <>
              <IoIosArrowDropdownCircle size="2em" color="#077F46" />
              <Text color="primary.black" fontWeight="bold">See More</Text>
            </>
          }
          </Flex>
      </Box>
    </Flex>
  );
}
