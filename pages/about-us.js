import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Jumbotron from "../components/pages/about-us/Jumbotron";
import VisionMision from "../components/pages/about-us/VisionMision";
import Certification from "../components/pages/about-us/Certification";
import LegalInformation from "../components/pages/about-us/LegalInformation";
import Milestone from "../components/pages/about-us/Milestone";
import Whatsapp from "../components/navigation/Whatsapp";

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>Sanggarjaya | About Us</title>
      </Head>

      <Jumbotron />
      <VisionMision />
      <Milestone />
      <Certification />
      <LegalInformation />
      <Whatsapp />
    </Layout>
  );
}
