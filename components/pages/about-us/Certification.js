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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { CERTIFICATION_LIST } from '../../../const';

const Certifs = ({ title, desc, pdf, onOpen }) => {
  return (
    <Flex flexDir='column' gridGap='1rem' onClick={onOpen} cursor='pointer' _hover={{ color: 'primary.orange' }}>
      <Heading display={{ base: 'none', md: 'block' }} size='md'>
        {title}
      </Heading>
      <Heading display={{ base: 'block', md: 'none' }} color='primary.orange' size='md'>
        {title}
      </Heading>
      <Text fontStyle='normal' fontFamily='Hind' fontSize='0.85em'>
        {desc}
      </Text>
    </Flex>
  );
};

const ModalPDF = ({ isOpen, onClose, pdfData }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onNextPage() {
    if (pageNumber + 1 <= numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function onPrevPage() {
    if (pageNumber - 1 >= 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function isNextDisable() {
    return pageNumber + 1 > numPages;
  }

  function isPrevDisable() {
    return pageNumber - 1 < 1;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pt={'3rem'}>
          <Document file={pdfData?.file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
            <Page pageNumber={pageNumber} />
          </Document>
          <Flex
            w={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            mt={'1rem'}
            fontSize={'18px'}
            color={'#353535'}
            fontWeight={'bold'}>
            {pdfData?.title}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
            <span style={{ marginRight: '20px' }}>
              <GrFormPrevious
                className={isPrevDisable() ? 'icon-disabled' : 'icon-available'}
                style={{ cursor: 'pointer' }}
                onClick={() => !isPrevDisable() && onPrevPage()}
              />
            </span>{' '}
            Page {pageNumber} of {numPages}{' '}
            <span style={{ marginLeft: '20px' }}>
              <GrFormNext
                className={isNextDisable() ? 'icon-disabled' : 'icon-available'}
                style={{ cursor: 'pointer' }}
                onClick={() => !isNextDisable() && onNextPage()}
              />
            </span>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default function Certification() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showMore, setShowMore] = useState(false);
  const [pdfData, setPdfData] = useState(null);

  function handleOnOpen(pdfData) {
    setPdfData(pdfData);
    onOpen();
  }

  return (
    <>
      <ModalPDF isOpen={isOpen} onClose={onClose} pdfData={pdfData} />
      <Flex flexDir='column' w='100%' py='3rem' px='3rem' id='certification'>
        <Heading color='primary.black' size='2xl' borderBottom='5px solid #EE873B' maxW={{ base: '70%', md: '25%' }}>
          Certification
        </Heading>
        <Grid
          display={{ base: 'grid', md: 'none' }}
          gridTemplateColumns='repeat(1, 1fr)'
          gridGap={6}
          py='3rem'
          w='100%'>
          {CERTIFICATION_LIST.map((x, i) =>
            i <= 2 ? (
              <GridItem key={i}>
                <Certifs title={x.title} desc={x.desc} onOpen={() => handleOnOpen(x)} />
              </GridItem>
            ) : showMore ? (
              <GridItem key={i}>
                <Certifs title={x.title} desc={x.desc} onOpen={() => handleOnOpen(x)} />
              </GridItem>
            ) : null
          )}
        </Grid>
        <Grid
          display={{ base: 'none', md: 'grid' }}
          gridTemplateColumns='repeat(3, 1fr)'
          gridGap={12}
          py='3rem'
          w='100%'>
          {CERTIFICATION_LIST.map((x, i) => (
            <GridItem>
              <Certifs key={i} title={x.title} desc={x.desc} onOpen={() => handleOnOpen(x)} />
            </GridItem>
          ))}
        </Grid>
        <Box display={{ base: 'flex', md: 'none' }} w='100%' justifyContent='center'>
          <Flex alignItems='center' fontSize='1.1em' gridGap='1rem' onClick={() => setShowMore(!showMore)}>
            {showMore ? (
              <>
                <IoIosArrowDropupCircle size='2em' color='#F18720' />
                <Text color='primary.black' fontWeight='bold'>
                  See Less
                </Text>
              </>
            ) : (
              <>
                <IoIosArrowDropdownCircle size='2em' color='#F18720' />
                <Text color='primary.black' fontWeight='bold'>
                  See More
                </Text>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
