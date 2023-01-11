import React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { RiTelegramFill, RiWhatsappFill } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';

export default function Footer() {
  return (
    <Flex flexDir='column' w='100%' as='footer'>
      <Box
        bg='primary.grey'
        w='100%'
        py='3rem'
        px='6rem'
        color='white'
        display='grid'
        borderTop='4px solid #F18720'
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(3, 1fr)',
        }}
        gridTemplateRows={{
          base: 'repeat(1, 1fr)',
          md: '1fr',
        }}
        gridGap={{
          base: '0.5em',
          md: '0',
        }}
        justifyContent='space-between'
        alignItems='center'>
        <Flex flexDir='column' gridGap='3rem'>
          <Flex flexDir='column' gridGap='0.85rem'>
            <a href='/about-us'>
              <Text fontWeight='bold' _hover={{ color: 'primary.orange' }} cursor='pointer'>
                About Us
              </Text>
            </a>
            <a href='/products'>
              <Text fontWeight='bold' _hover={{ color: 'primary.orange' }} cursor='pointer'>
                Our Products
              </Text>
            </a>
            <a href='contact-us'>
              <Text fontWeight='bold' _hover={{ color: 'primary.orange' }} cursor='pointer'>
                Contact Us
              </Text>
            </a>
          </Flex>
          <Flex gridGap='2rem'>
            <a
              href='https://api.whatsapp.com/send/?phone=6281271889889'
              target='_blank'
              rel='noopener'
              style={{ textDecoration: 'none' }}>
              <RiWhatsappFill
                size='2em'
                color='#353535'
                onMouseEnter={(e) => (e.target.style.color = '#C5C5C5')}
                onMouseLeave={(e) => (e.target.style.color = '#353535')}
              />
            </a>
            <a href='https://t.me/erizalrivaldy' target='_blank' rel='noopener' style={{ textDecoration: 'none' }}>
              <RiTelegramFill
                size='2em'
                color='#353535'
                onMouseEnter={(e) => (e.target.style.color = '#C5C5C5')}
                onMouseLeave={(e) => (e.target.style.color = '#353535')}
              />
            </a>
          </Flex>
        </Flex>
        <Flex flexDir='column' alignItems='flex-start' justifyContent='flex-start' gridGap='0.65rem' h='100%'>
          <Flex
            gridGap='0.3rem'
            alignItems='center'
            fontSize='0.85em'
            _hover={{ color: 'primary.orange' }}
            cursor='pointer'>
            <HiDownload size='1.5em' />
            <a href='/assets/pdf/SJA Company Profile-ENGLISH.pdf' target='_blank' rel='noopener' download>
              <Text fontWeight={400}>Download Company Profile</Text>
            </a>
          </Flex>
          <Flex
            gridGap='0.3rem'
            alignItems='center'
            fontSize='0.85em'
            _hover={{ color: 'primary.orange' }}
            cursor='pointer'>
            <HiDownload size='1.5em' />
            <a href='/assets/pdf/SJA Catalogue-ENGLISH.pdf' target='_blank' rel='noopener' download>
              <Text fontWeight={400}>Download Products Catalog</Text>
            </a>
          </Flex>
        </Flex>
        <Flex flexDir='column' gridGap='1rem'>
          <Heading color='primary.orange' size='md'>
            PT. Sanggar Jaya Abadi
          </Heading>
          <Text fontWeight={400} fontSize='0.75em'>
            Jalan Raya Rancaekek, KM 24.5, Kawasan Industri Dwipapuri, Blok C9-10, Desa Mangunarga, Kec. Cimanggung,
            Kabupaten Sumedang, Jawa Barat, Indonesia
          </Text>
          <Text fontWeight={600} fontSize='0.85em'>
            E-mail : marketing@sanggarjaya.com{' '}
          </Text>
          <Text fontWeight={600} fontSize='0.85em'>
            Phone : +62 811-2399-968
          </Text>
        </Flex>
      </Box>
      <Box bg='secondary.grey' w='100%' color='white' py='0.5rem' display='flex' justifyContent='center'>
        <Text>Copyright ©2022 PT. Sanggar Jaya Abadi. All Rights Reserved.</Text>
      </Box>
    </Flex>
  );
}
