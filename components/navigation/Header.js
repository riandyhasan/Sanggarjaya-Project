import React, { useState } from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiPhoneFill, RiArrowDropDownLine } from "react-icons/ri";
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
    submenu: [
        {
            subname: "Vision & Mission",
            subpath : "/visimisi"
        },
        {
            subname: "Milestone",
            subpath: "/milestone"
        },
        {
            subname: "Certification",
            subpath: "/certification"
        },
        {
            subname: "Legal Information",
            subpath: "/legal-information"
        }
    ]
  },
  {
    name: "Our Products",
    path: "/out-products",
    submenu: [
        {
            subname: "All Products",
            subpath : "/all"
        },
        {
            subname: "Electrical & Utility Pole",
            subpath: "/eletrical"
        },
        {
            subname: "Light Pole",
            subpath: "/light-pole"
        },
        {
            subname: "Monopole Tower",
            subpath: "/monopole"
        },
        {
            subname: "Custom Mount Antena",
            subpath: "/custom"
        }
    ]
  },  
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex
      as="nav"
      bgImg="url('/assets/images/background/navbar.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pt="0.4rem"
      paddingLeft={["2em", "4em", "6em"]}
      paddingRight={["2em", "4em", "6em"]}
      borderBottom="4px solid #077F46"
      {...props}
    >
      <Box cursor="pointer" maxW="25vw" mt="0.2rem">
        <Link href="/">
          <Image
            src="/assets/images/logo/logo-sja.png"
            height={87}
            width={65}
          />
        </Link>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Flex flexDir="column" gridGap="1rem">
      <Box
        display={{ base: menuOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
         <Stack
          mt={{ base: menuOpen ? "1em" : "0", md: "0" }}
          spacing={4}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          fontSize="0.85em"
        >
        <Flex gridGap="0.5rem" alignItems="center" mr={4} cursor="pointer">
            <Box bg="primary.orange" borderRadius="20px" px="1rem" _hover={{bg:"primary.green"}}>
                <Flex gridGap="0.6rem" color="white" alignItems="center" fontSize="0.85em"> 
                    <RiPhoneFill/>
                    <Text fontWeight="bold">Hotline</Text>
                </Flex>
            </Box>
            <Text fontWeight="bold" color="primary.black" fontSize="0.85em" _hover={{color:"primary.orange"}}>+62 811-2399-968</Text>
            </Flex>
            <a href="/" target="_blank" rel="noopener" style={{ textDecoration: "none" }}> 
                <AiFillInstagram color="#077F46" size="1.2em" onMouseEnter={(e) => e.target.style.color="#F18720"} onMouseLeave={(e) => e.target.style.color="#077F46"}/>
            </a>
            <a href="/" target="_blank" rel="noopener" style={{ textDecoration: "none" }}> 
                <AiFillFacebook color="#077F46" size="1.2em" onMouseEnter={(e) => e.target.style.color="#F18720"} onMouseLeave={(e) => e.target.style.color="#077F46"}/>
            </a>
            <a href="/" target="_blank" rel="noopener" style={{ textDecoration: "none" }} > 
                <AiOutlineTwitter color="#077F46" size="1.2em" onMouseEnter={(e) => e.target.style.color="#F18720"} onMouseLeave={(e) => e.target.style.color="#077F46"}/>
            </a>
            <a href="/" target="_blank" rel="noopener" style={{ textDecoration: "none" }}> 
                <AiFillLinkedin color="#077F46" size="1.2em" onMouseEnter={(e) => e.target.style.color="#F18720"} onMouseLeave={(e) => e.target.style.color="#077F46"}/>
            </a>
        </Stack>
      </Box>
      <Box
        display={{ base: menuOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          mt={{ base: menuOpen ? "1em" : "0", md: "0" }}
          spacing={10}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
        >
          {LINKS.map((link) => {
            return (
              <Box key={link.name + "-nav"}>
                <Link href={link.path} key={link.name + "-nav"}>
                {link.submenu ? 
                    <Flex alignItems="center" cursor="pointer" _hover = {{ color : "primary.orange" }} color="primary.black">
                                          <Text
                    fontSize="0.85rem"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    {link.name}
                  </Text>
                        <RiArrowDropDownLine size="1.2em"/>
                    </Flex>
                                :
                  <Text
                    fontSize="0.85rem"
                    fontWeight="bold"
                    cursor="pointer"
                    textAlign="center"
                    color="primary.black"
                    _hover = {{ color : "primary.orange" }}
                  >
                    {link.name}
                  </Text>
                }
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