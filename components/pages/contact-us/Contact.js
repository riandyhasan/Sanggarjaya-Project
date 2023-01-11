import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  CircularProgress,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiPhoneFill, RiTelegramFill, RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Divider = () => {
  return (
    <Flex w='100%' justifyContent='center'>
      <Box bg='rgba(255, 255, 255, 0.5)' h='1px' w='90%' borderRadius='5px' my='1rem' />
    </Flex>
  );
};

export default function Contact({ ...props }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [onSubmit, setOnSubmit] = useState(false);
  const toast = useToast();

  function validateForm() {
    if (name == '' || company == '' || email == '' || phone == '' || company == '') {
      toast({
        title: 'Please fill the form!',
        description: 'Before you submit, kindly please fill all field first.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      setOnSubmit(false);
      return false;
    }
    return true;
  }

  function handleSend() {
    setOnSubmit(true);
    if (!validateForm()) return;
    const emailParams = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      message: message,
    };
    emailjs.send('service_nou4ci4', 'template_vhv813q', emailParams, 'yPRr8ktHxDe5vOY83').then(
      (result) => {
        toast({
          title: 'Success!',
          description: 'Your messages has sent successfully!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setOnSubmit(false);
      },
      (error) => {
        toast({
          title: 'Failed!',
          description: error.text,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
        setOnSubmit(false);
      }
    );
  }
  return (
    <Flex filter='drop-shadow(0px 22px 40px rgba(0, 0, 0, 0.15))' flexDir={{ base: 'column', md: 'row' }} {...props}>
      <Box
        bg="url('/assets/images/background/contact-information.png')"
        bgRepeat='no-repeat'
        bgSize='cover'
        color='white'
        p='1rem'
        w={{ base: '100%', md: '30%' }}>
        <Heading mb={{ base: '1rem', md: '2rem' }} fontSize={{ base: '1.2em', md: '1.5em' }}>
          Contact Information
        </Heading>
        <Flex gridGap='1rem'>
          <FaMapMarkerAlt size='2.5em' />
          <Flex flexDir='column' gridGap='0.5rem'>
            <Text fontWeight='bold'>Address :</Text>
            <Text fontWeight={400} fontSize='0.85em'>
              Jalan Raya Rancaekek, KM 24.5, Kawasan Industri Dwipapuri, Blok C9-10, Desa Mangunarga, Kec. Cimanggung,
              Kabupaten Sumedang, Jawa Barat, Indonesia
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex gridGap='1rem'>
          <RiPhoneFill size='1.5em' />
          <Flex flexDir='column' gridGap='0.5rem'>
            <Text fontWeight='bold'>Phone Number :</Text>
            <Text fontWeight={400} fontSize='0.85em'>
              +62 811-2399-968
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex gridGap='1rem'>
          <MdEmail size='1.5em' />
          <Flex flexDir='column' gridGap='0.5rem'>
            <Text fontWeight='bold'>Email :</Text>
            <Text fontWeight={400} fontSize='0.85em'>
              marketing@sanggarjaya.com
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex gridGap='2rem' color='white' my={{ base: '1rem', md: '0' }} ml='1rem'>
          <a
            href='https://api.whatsapp.com/send/?phone=6281271889889'
            target='_blank'
            rel='noopener'
            style={{ textDecoration: 'none' }}>
            <RiWhatsappFill size='2em' />
          </a>
          <a href='https://t.me/erizalrivaldy' target='_blank' rel='noopener' style={{ textDecoration: 'none' }}>
            <RiTelegramFill size='2em' />
          </a>
        </Flex>
      </Box>
      <Box w={{ base: '100%', md: '70%' }} bg='#FBFBFB' py='1rem' px='2rem'>
        <Box bg='primary.green' h='5px' w={{ base: '16%', md: '8%' }} borderRadius='20px' />
        <Heading size='lg' color='primary.black'>
          Send Us A Message
        </Heading>

        <Grid gridTemplateColumns='repeat(1, 1fr)' gap={4} w='100%' pt='2rem' pb='1rem'>
          <GridItem>
            <Flex
              gridGap='2rem'
              alignItems={{ base: 'flex-start', md: 'center' }}
              flexDir={{ base: 'column', md: 'row' }}>
              <FormControl w={{ base: '100%', md: '60%' }} isRequired>
                <FormLabel htmlFor='name' color='primary.black' fontSize='0.9em'>
                  Name
                </FormLabel>
                <Input
                  type='text'
                  id='name'
                  placeholder='Your Name'
                  borderRadius='10px'
                  border='1px solid #E3E3E3'
                  color='primary.black'
                  bg='white'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl w={{ base: '100%', md: '40%' }} isRequired>
                <FormLabel htmlFor='phone' color='primary.black' fontSize='0.9em'>
                  Phone Number
                </FormLabel>
                <Input
                  type='text'
                  id='phone'
                  placeholder='Your Phone Number'
                  borderRadius='10px'
                  border='1px solid #E3E3E3'
                  color='primary.black'
                  bg='white'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
            </Flex>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor='email' color='primary.black' fontSize='0.9em'>
                Email
              </FormLabel>
              <Input
                type='email'
                id='email'
                placeholder='Your Email'
                borderRadius='10px'
                border='1px solid #E3E3E3'
                color='primary.black'
                bg='white'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor='company' color='primary.black' fontSize='0.9em'>
                Company
              </FormLabel>
              <Input
                type='text'
                id='company'
                placeholder='Your Company'
                borderRadius='10px'
                border='1px solid #E3E3E3'
                color='primary.black'
                bg='white'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor='message' color='primary.black' fontSize='0.9em'>
                Message
              </FormLabel>
              <Textarea
                id='message'
                minH='200px'
                placeholder='Your Message'
                borderRadius='10px'
                border='1px solid #E3E3E3'
                color='primary.black'
                bg='white'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Box
          py='0.3rem'
          bg='primary.orange'
          borderRadius='20px'
          boxShadow='0px 22px 40px rgba(0, 0, 0, 0.15)'
          w={{ base: '100%', md: '15%' }}
          textAlign='center'
          fontSize='0.85em'
          fontWeight={600}
          cursor='pointer'
          color='white'
          _hover={{ bg: '#D26801' }}
          onClick={() => (onSubmit ? null : handleSend())}
          my={{ base: '1rem', md: '0' }}>
          {onSubmit ? (
            <CircularProgress isIndeterminate color='primary.green' thickness='12px' size='1.25em' />
          ) : (
            'Send'
          )}
        </Box>
      </Box>
    </Flex>
  );
}
