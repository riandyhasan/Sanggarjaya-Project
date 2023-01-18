import { Flex, Heading, Text, Image, Box, OrderedList, ListItem } from '@chakra-ui/react';

export default function VisionMision() {
  return (
    <Flex
      w='100%'
      gridGap='4rem'
      justifyContent='center'
      py='3rem'
      px={{ base: '2rem', md: '3rem' }}
      flexDir={{ base: 'column-reverse', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      id='visimisi'>
      <Flex flexDir='column' w={{ base: '100%', md: '45%' }} gridGap='3rem'>
        <Box>
          <Box bg='primary.orange' w='20%' h='4px' borderRadius='5px' />
          <Heading color='primary.black' size='xl' mt='1rem'>
            Vision
          </Heading>
          <Text
            fontWeight={400}
            fontSize={{ base: '1em', md: '0.75em' }}
            maxW={{ base: '100%', md: '80%' }}
            mt={{ base: '0.5rem', md: '2rem' }}>
            To establish PT. Sanggar Jaya Abadi as the biggest, the best and the most trustworthy company in Indonesia.
          </Text>
        </Box>

        <Box>
          <Box bg='primary.orange' w='20%' h='4px' borderRadius='5px' />
          <Heading color='primary.black' size='xl' mt='1rem'>
            Mission
          </Heading>
          <Text
            fontWeight={400}
            fontSize={{ base: '1em', md: '0.75em' }}
            maxW={{ base: '100%', md: '80%' }}
            mt={{ base: '0.5rem', md: '2rem' }}>
            <OrderedList>
              <ListItem>Creating a quality product with a high level of gurantee.</ListItem>
              <ListItem>To keep up with increasing demand by increasing production capacity.</ListItem>
              <ListItem>Giving the best service to every customer</ListItem>
            </OrderedList>
          </Text>
        </Box>
      </Flex>
      <Flex width={{ base: '95%', md: '35%' }}>
        <Image src='/assets/images/background/vision-mision.png' />
      </Flex>
    </Flex>
  );
}
