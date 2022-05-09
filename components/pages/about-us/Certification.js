import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { getStorage, ref, listAll } from "firebase/storage";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import { app } from "../../../util/firebase";

const Certifs = ({ title, desc, pdf, onOpen }) => {
  return (
    <Flex flexDir="column" gridGap="1rem" onClick={onOpen} cursor="pointer">
      <Heading color={{ base:"primary.orange", md: "primary.black" }} size="md">
        {title}
      </Heading>
      <Text fontStyle="normal" fontFamily="Hind" fontSize="0.85em">
        {desc}
      </Text>
    </Flex>
  );
};

const ModalPDF = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Document
              file={{ url: "http://www.africau.edu/images/default/sample.pdf" }}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </Box>
        </ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default function Certification() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <ModalPDF isOpen={isOpen} onClose={onClose} />
      <Flex flexDir="column" w="100%" py="3rem" px="3rem">
        <Heading
          color="primary.black"
          size="2xl"
          borderBottom="5px solid #EE873B"
          maxW={{ base: "70%", md:"25%" }}
        >
          Certification
        </Heading>
        <Grid display={{ base:"grid" , md: "none"}} gridTemplateColumns="repeat(1, 1fr)" gridGap={6} py="3rem" w="100%">
        {[...Array(8)].map((x, i) => (
          i <=  2 ?
          <GridItem>
            <Certifs
              title="ISO 9001-2015 QMS"
              desc="Certificate Of Registration"
              onOpen={onOpen}
            />
          </GridItem>
            :
            showMore ? 
            <GridItem>
            <Certifs
              title="ISO 9001-2015 QMS"
              desc="Certificate Of Registration"
              onOpen={onOpen}
            />
          </GridItem>
          :
          null
          ))}
        </Grid>
        <Grid display={{ base:"none" , md: "grid" }} gridTemplateColumns="repeat(3, 1fr)" gridGap={12} py="3rem" w="100%">
        {[...Array(8)].map((x, i) => (
          <GridItem>
            <Certifs
              title="ISO 9001-2015 QMS"
              desc="Certificate Of Registration"
              onOpen={onOpen}
            />
          </GridItem>
          ))}
        </Grid>
        <Box display={{ base: "flex", md: "none" }} w="100%" justifyContent="center">
          <Flex alignItems="center" fontSize="1.1em" gridGap="1rem" onClick={() => setShowMore(!showMore)}>
            {showMore ?
            <>
              <IoIosArrowDropupCircle size="2em" color="#F18720" />
              <Text color="primary.black" fontWeight="bold">See Less</Text>
            </>

            :
            <>
              <IoIosArrowDropdownCircle size="2em" color="#F18720" />
              <Text color="primary.black" fontWeight="bold">See More</Text>
            </>
          }
          </Flex>
      </Box>
      </Flex>
    </>
  );
}
