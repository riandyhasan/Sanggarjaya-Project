import { Box } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp(){
    return(
        <Box pos="fixed" bottom={35} right={30} bg="#25D366" borderRadius="50px" p="0.75rem" cursor="pointer" filter="drop-shadow(0px 22px 40px rgba(0, 0, 0, 0.15))">
            <BsWhatsapp size="2em" color="#FFFFFF"/>
        </Box>
    )
}