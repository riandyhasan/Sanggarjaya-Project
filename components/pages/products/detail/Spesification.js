import { Flex, Heading, Text, Image, Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { PRODUCT_LIST } from '../../../../const';
import { useState, useEffect } from 'react';

export default function Spesification({ id }) {
  const [productData, setProductData] = useState(null);

  function getProductData(id) {
    PRODUCT_LIST.map((p) => {
      if (p.id == id) setProductData(p);
    });
  }

  useEffect(() => {
    getProductData(id);
  }, [id]);

  return (
    <Flex w='100%' flexDir='column' py='3rem' px='3rem' bg='#FBFBFB'>
      <Flex flexDir='column' alignItems='flex-start'>
        <Box h='5px' w={{ base: '20%', md: '5%' }} bg='primary.orange' borderRadius='5px' />
        <Heading size={{ base: 'lg', md: 'xl' }} lineHeight={{ base: '40px', md: '72px' }} color='primary.black'>
          Product Specification
        </Heading>
      </Flex>
      <Flex w='100%' justifyContent='center'>
        <Flex maxW={{ base: '80%', md: '90%' }}>
          <Image src={productData?.img} />
        </Flex>
      </Flex>
      {productData?.spec && (
        <Flex w='100%' justifyContent='center' mt={{ base: '2rem', md: '0' }}>
          <Flex maxW={{ base: '100%', md: '90%' }}>
            <Image src={productData.spec} />
          </Flex>
          {/* <Box
          bg='#FFFFFF'
          // px="2rem"
          pb='2rem'
          boxShadow='0px 22px 40px rgba(0, 0, 0, 0.15)'>
          <Table variant='unstyle' maxW='200px'>
            <Thead>
              <Tr>
                <Th color='primary.black'>Type of Pole</Th>
                <Th color='primary.black'>Diameter</Th>
                <Th isNumeric color='primary.black'>
                  Thickness
                </Th>
                <Th isNumeric color='primary.black'>
                  Length
                </Th>
                <Th isNumeric color='primary.black' textAlign='left'>
                  Over <br />
                  <br /> <span style={{ color: '#077F46' }}>Length</span>
                </Th>
                <Th isNumeric color='primary.black'>
                  {' '}
                  <br />
                  <br /> <span style={{ color: '#077F46' }}>Height</span>
                </Th>
                <Th isNumeric color='primary.green'>
                  Total <br />
                  <br />{' '}
                </Th>
              </Tr>
              <Box h='5px' w='570%' bg='primary.orange' borderRadius='5px' />
            </Thead>

            <Tbody>
              <Tr>
                <Td color='primary.green' fontWeight='bold'>
                  1. FMI 8,4m
                </Td>
                <Td>139,9mm</Td>
                <Td>3,6mm</Td>
                <Td>8400mm</Td>
                <Td>400mm</Td>
                <Td>1600mm</Td>
                <Td>8400mm</Td>
              </Tr>
              <Box h='5px' w='570%' bg='primary.orange' borderRadius='5px' />
              <Tr>
                <Td color='primary.green' fontWeight='bold'>
                  2. FMI 9m
                </Td>
                <Td>139,9mm</Td>
                <Td>3,6mm</Td>
                <Td>9000mm</Td>
                <Td>400mm</Td>
                <Td>1600mm</Td>
                <Td>9000mm</Td>
              </Tr>
              <Box h='5px' w='570%' bg='primary.orange' borderRadius='5px' />
              <Tr>
                <Td color='primary.green' fontWeight='bold'>
                  3. IKO 6m
                </Td>
                <Td>88,9mm</Td>
                <Td>3,6mm</Td>
                <Td>6000mm</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>6000mm</Td>
              </Tr>
              <Box h='5px' w='570%' bg='primary.orange' borderRadius='5px' />
            </Tbody>
          </Table>
        </Box> */}
        </Flex>
      )}
    </Flex>
  );
}
