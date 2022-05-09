import { Flex, Heading, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductCard({ img, text }) {
  const [isHover, setHover] = useState(false);
  const router = useRouter();
  return (
    <Box
      bg={
        isHover
          ? img
          : `linear-gradient(360deg, #077F46 -5.9%, rgba(7, 127, 70, 0) 18.64%), ${img}`
      }
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="flex-end"
      color="white"
      w={{ base: "153.82px", md:"254.25px"}}
      h={{ base:"190.12px" , md: "314.25px" }}
      filter="drop-shadow(0px 22px 40px rgba(0, 0, 0, 0.15))"
      borderRadius="11px"
      cursor="pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => router.push("products/detail")}
    >
      <Flex
        w="100%"
        p="1rem"
        bg={isHover ? "primary.green" : "transparent"}
        justifyContent="center"
        borderBottomRadius="11px"
      >
        <Heading size="sm" textAlign="center">
          {text}
        </Heading>
      </Flex>
    </Box>
  );
}
