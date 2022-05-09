import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import Jumbotron from "../components/pages/contact-us/Jumbotron";
import ContactForm from "../components/pages/contact-us/Contact";
import Map from "../components/pages/contact-us/Map";
import Whatsapp from "../components/navigation/Whatsapp";

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Sanggarjaya | Contact Us</title>
      </Head>

      <Flex flexDir="column" w="100%" alignItems="center">
        <Jumbotron />
        <ContactForm mt={{ base:"-32rem", md:"-22rem" }} w="80%" />
      </Flex>

      <Map />
      <Whatsapp />
    </Layout>
  );
}
