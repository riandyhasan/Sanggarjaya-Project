import React from "react";
import { Flex, Box } from "@chakra-ui/react";

export default function Map() {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      px="5rem"
      py="3rem"
    >
      <Box w="100%" borderRadius="20px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.872077316651!2d107.8009288!3d-6.9539881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6af71788f84a7f29!2sPt%20Sanggar%20Jaya%20Abadi!5e0!3m2!1sen!2sid!4v1649051875192!5m2!1sen!2sid"
          style={{ width: "100%", height: "500px", borderRadius: "20px" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Flex>
  );
}
