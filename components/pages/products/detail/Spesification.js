import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export default function Spesification() {
  return (
    <Flex w="100%" flexDir="column" py="3rem" px="3rem" bg="#FBFBFB">
      <Flex flexDir="column" alignItems="flex-start">
        <Box h="5px" w="5%" bg="primary.orange" borderRadius="5px" />
        <Heading size="xl" lineHeight="72px" color="primary.black">
          Product Specification
        </Heading>
      </Flex>
      <Flex w="100%" justifyContent="center">
        <Image src="/assets/images/products/spek-dummy.png" />
      </Flex>
      <Flex w="100%" justifyContent="center" mt="3rem">
        <Box
          bg="#FFFFFF"
          px="2rem"
          pb="2rem"
          boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
        >
          <Table variant="unstyle">
            <Thead>
              <Tr>
                <Th color="primary.black">Type of Pole</Th>
                <Th color="primary.black">Diameter</Th>
                <Th isNumeric color="primary.black">
                  Thickness
                </Th>
                <Th isNumeric color="primary.black">
                  Length
                </Th>
                <Th isNumeric color="primary.black" textAlign="left">
                  Over <br />
                  <br /> <span style={{ color: "#077F46" }}>Length</span>
                </Th>
                <Th isNumeric color="primary.black">
                  {" "}
                  <br />
                  <br /> <span style={{ color: "#077F46" }}>Height</span>
                </Th>
                <Th isNumeric color="primary.green">
                  Total <br />
                  <br />{" "}
                </Th>
              </Tr>
              <Box h="5px" w="570%" bg="primary.orange" borderRadius="5px" />
            </Thead>

            <Tbody>
              <Tr>
                <Td color="primary.green" fontWeight="bold">
                  1. FMI 8,4m
                </Td>
                <Td>139,9mm</Td>
                <Td>3,6mm</Td>
                <Td>8400mm</Td>
                <Td>400mm</Td>
                <Td>1600mm</Td>
                <Td>8400mm</Td>
              </Tr>
              <Box h="5px" w="570%" bg="primary.orange" borderRadius="5px" />
              <Tr>
                <Td color="primary.green" fontWeight="bold">
                  2. FMI 9m
                </Td>
                <Td>139,9mm</Td>
                <Td>3,6mm</Td>
                <Td>9000mm</Td>
                <Td>400mm</Td>
                <Td>1600mm</Td>
                <Td>9000mm</Td>
              </Tr>
              <Box h="5px" w="570%" bg="primary.orange" borderRadius="5px" />
              <Tr>
                <Td color="primary.green" fontWeight="bold">
                  3. IKO 6m
                </Td>
                <Td>88,9mm</Td>
                <Td>3,6mm</Td>
                <Td>6000mm</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>6000mm</Td>
              </Tr>
              <Box h="5px" w="570%" bg="primary.orange" borderRadius="5px" />
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
}
