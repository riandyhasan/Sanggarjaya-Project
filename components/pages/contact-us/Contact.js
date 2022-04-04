import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Divider = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <Box
        bg="rgba(255, 255, 255, 0.5)"
        h="1px"
        w="90%"
        borderRadius="5px"
        my="1rem"
      />
    </Flex>
  );
};

export default function Contact({ ...props }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const toast = useToast();

  const handleSend = () => {
    const emailParams = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      message: message,
    };
    emailjs
      .send(
        "service_nou4ci4",
        "template_vhv813q",
        emailParams,
        "yPRr8ktHxDe5vOY83"
      )
      .then(
        (result) => {
          toast({
            title: "Success!",
            description: "Your messages has sent successfully!",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Flex filter="drop-shadow(0px 22px 40px rgba(0, 0, 0, 0.15))" {...props}>
      <Box
        bg="url('/assets/images/background/contact-information.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
        p="1rem"
        w="30%"
      >
        <Heading mb="2rem">Contact Information</Heading>
        <Flex gridGap="1rem">
          <FaMapMarkerAlt size="2.5em" />
          <Flex flexDir="column" gridGap="0.5rem">
            <Text fontWeight="bold">Address :</Text>
            <Text fontWeight={400} fontSize="0.85em">
              Jalan Raya Rancaekek, KM 24.5, Kawasan Industri Dwipapuri, Blok
              C9-10, Desa Mangunarga, Kec. Cimanggung, Kabupaten Sumedang, Jawa
              Barat, Indonesia
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex gridGap="1rem">
          <RiPhoneFill size="1.5em" />
          <Flex flexDir="column" gridGap="0.5rem">
            <Text fontWeight="bold">Phone Number :</Text>
            <Text fontWeight={400} fontSize="0.85em">
              +62 811-2399-968
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex gridGap="1rem">
          <MdEmail size="1.5em" />
          <Flex flexDir="column" gridGap="0.5rem">
            <Text fontWeight="bold">Email :</Text>
            <Text fontWeight={400} fontSize="0.85em">
              marketing@sanggarjaya.com
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex gridGap="2rem" color="white">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none" }}
          >
            <AiFillInstagram size="2em" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none" }}
          >
            <AiFillFacebook size="2em" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none" }}
          >
            <AiOutlineTwitter size="2em" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none" }}
          >
            <AiFillLinkedin size="2em" />
          </a>
        </Flex>
      </Box>
      <Box w="70%" bg="#FBFBFB" py="1rem" px="2rem">
        <Box bg="primary.green" h="5px" w="8%" borderRadius="20px" />
        <Heading size="lg" color="primary.black">
          Send Us A Message
        </Heading>

        <Grid
          gridTemplateColumns="repeat(1, 1fr)"
          gap={4}
          w="100%"
          pt="2rem"
          pb="1rem"
        >
          <GridItem>
            <Flex gridGap="2rem" alignItems="center">
              <FormControl w="60%" isRequired>
                <FormLabel
                  htmlFor="name"
                  color="primary.black"
                  fontSize="0.9em"
                >
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  borderRadius="10px"
                  border="1px solid #E3E3E3"
                  color="primary.black"
                  bg="white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl w="40%" isRequired>
                <FormLabel
                  htmlFor="phone"
                  color="primary.black"
                  fontSize="0.9em"
                >
                  Phone Number
                </FormLabel>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Your Phone Number"
                  borderRadius="10px"
                  border="1px solid #E3E3E3"
                  color="primary.black"
                  bg="white"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
            </Flex>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="email" color="primary.black" fontSize="0.9em">
                Email
              </FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                borderRadius="10px"
                border="1px solid #E3E3E3"
                color="primary.black"
                bg="white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="company"
                color="primary.black"
                fontSize="0.9em"
              >
                Company
              </FormLabel>
              <Input
                type="text"
                id="company"
                placeholder="Your Company"
                borderRadius="10px"
                border="1px solid #E3E3E3"
                color="primary.black"
                bg="white"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel
                htmlFor="message"
                color="primary.black"
                fontSize="0.9em"
              >
                Message
              </FormLabel>
              <Textarea
                id="message"
                minH="200px"
                placeholder="Your Message"
                borderRadius="10px"
                border="1px solid #E3E3E3"
                color="primary.black"
                bg="white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Box
          py="0.3rem"
          bg="primary.orange"
          borderRadius="20px"
          boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
          w="15%"
          textAlign="center"
          fontSize="0.85em"
          fontWeight={600}
          cursor="pointer"
          color="white"
          _hover={{ bg: "#D26801" }}
          onClick={handleSend}
        >
          Send
        </Box>
      </Box>
    </Flex>
  );
}
