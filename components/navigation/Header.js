import React, { useState } from 'react';
import { Box, Text, Flex, Stack } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiPhoneFill, RiArrowDropDownLine, RiTelegramFill, RiWhatsappFill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LINKS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about-us',
    submenu: [
      {
        subname: 'Vision & Mission',
        subpath: '#visimisi',
      },
      {
        subname: 'Milestone',
        subpath: '#milestone',
      },
      {
        subname: 'Certification',
        subpath: '#certification',
      },
      {
        subname: 'Legal Information',
        subpath: '#legal-information',
      },
    ],
  },
  {
    name: 'Our Products',
    path: '/products',
    submenu: [
      {
        subname: 'All Products',
        subpath: '',
      },
      {
        subname: 'Electrical & Utility Pole',
        subpath: '?type=electrical-utility-pole',
      },
      {
        subname: 'Light Pole',
        subpath: '?type=light-pole',
      },
      {
        subname: 'Monopole Tower',
        subpath: '?type=monopole-tower',
      },
      {
        subname: 'Custom Mount Antena',
        subpath: '?type=custom-mount-antena',
      },
    ],
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
];

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const router = useRouter();

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      pt='0.4rem'
      paddingLeft={['2em', '4em', '6em']}
      paddingRight={['2em', '4em', '6em']}
      borderBottom='4px solid #077F46'
      {...props}>
      <Box cursor='pointer' maxW='25vw' mt='0.2rem'>
        <Link href='/'>
          <Image src='/assets/images/logo/logo-sja.png' height={87} width={65} />
        </Link>
      </Box>
      <Box display={{ base: 'block', md: 'none' }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Flex flexDir='column' gridGap='1rem' flexBasis={{ base: '100%', md: 'auto' }}>
        <Box display={{ base: 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
          <Stack
            mt={{ base: menuOpen ? '1em' : '0', md: '0' }}
            spacing={4}
            align='center'
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            fontSize='0.85em'>
            <Flex gridGap='0.5rem' alignItems='center' mr={0} cursor='pointer'>
              <Box bg='primary.orange' borderRadius='20px' px='1rem' _hover={{ bg: 'primary.green' }}>
                <Flex gridGap='0.6rem' color='white' alignItems='center' fontSize='0.85em'>
                  <RiPhoneFill />
                  <Text fontWeight='bold'>Hotline</Text>
                </Flex>
              </Box>
              <a
                href='https://api.whatsapp.com/send/?phone=6281271889889'
                target='_blank'
                rel='noopener'
                style={{ textDecoration: 'none' }}>
                <Text fontWeight='bold' color='primary.black' fontSize='0.85em' _hover={{ color: 'primary.orange' }}>
                  +62 811-2399-968
                </Text>
              </a>
            </Flex>
            <a
              href='https://api.whatsapp.com/send/?phone=6281271889889'
              target='_blank'
              rel='noopener'
              style={{ textDecoration: 'none' }}>
              <RiWhatsappFill
                color='#077F46'
                size='1.2em'
                onMouseEnter={(e) => (e.target.style.color = '#F18720')}
                onMouseLeave={(e) => (e.target.style.color = '#077F46')}
              />
            </a>
            {/* <a href='https://t.me/erizalrivaldy' target='_blank' rel='noopener' style={{ textDecoration: 'none' }}>
              <RiTelegramFill
                color='#077F46'
                size='1.2em'
                onMouseEnter={(e) => (e.target.style.color = '#F18720')}
                onMouseLeave={(e) => (e.target.style.color = '#077F46')}
              />
            </a> */}
          </Stack>
        </Box>
        <Box display={{ base: menuOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
          <Stack
            mb={{ base: menuOpen ? '1em' : '0', md: '0' }}
            spacing={10}
            align='center'
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}>
            {LINKS.map((link, idx) => {
              return (
                <Box key={link.name + '-nav'} pos='relative'>
                  <Link href={link.path} key={link.name + '-nav'}>
                    {link.submenu ? (
                      <>
                        <Flex
                          alignItems='center'
                          cursor='pointer'
                          _hover={{ color: 'primary.orange' }}
                          color={idx != 0 && router.pathname.includes(link.path) ? 'primary.orange' : 'primary.black'}
                          onMouseEnter={(e) => setSubMenuOpen(idx)}
                          onMouseLeave={(e) => setSubMenuOpen(null)}>
                          <Link href={link.path}>
                            <Text fontSize='0.85rem' fontWeight='bold' textAlign='center'>
                              {link.name}
                            </Text>
                          </Link>
                          <RiArrowDropDownLine
                            size='1.2em'
                            style={subMenuOpen == idx && { transform: 'rotate(180deg)' }}
                          />
                        </Flex>
                        {subMenuOpen == idx && (
                          <Flex
                            flexDir='column'
                            alignItems='center'
                            justifyContent='center'
                            p='1rem 2rem'
                            gap='1rem'
                            pos='fixed'
                            bg='white'
                            top={20}
                            marginLeft='-3.5rem'
                            boxShadow='0px 5px 10px rgba(0, 0, 0, 0.15)'
                            borderRadius='0px 0px 5px 5px'
                            onMouseEnter={(e) => setSubMenuOpen(idx)}
                            onMouseLeave={(e) => setSubMenuOpen(null)}>
                            {link.submenu.map((s, i) => (
                              <Link key={i} href={link.path + s.subpath}>
                                <Text
                                  color='#353535'
                                  _hover={{ color: 'primary.orange' }}
                                  cursor='pointer'
                                  fontSize='0.85rem'
                                  fontFamily='Hind'>
                                  {s.subname}
                                </Text>
                              </Link>
                            ))}
                          </Flex>
                        )}
                      </>
                    ) : (
                      <Text
                        fontSize='0.85rem'
                        fontWeight='bold'
                        cursor='pointer'
                        textAlign='center'
                        color={
                          router.pathname.includes(link.path)
                            ? idx != 0
                              ? 'primary.orange'
                              : router.pathname == link.path
                              ? 'primary.orange'
                              : 'primary.black'
                            : 'primary.black'
                        }
                        _hover={{ color: 'primary.orange' }}
                        onMouseEnter={(e) => setSubMenuOpen(idx)}
                        onMouseLeave={(e) => setSubMenuOpen(null)}>
                        {link.name}
                      </Text>
                    )}
                  </Link>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
