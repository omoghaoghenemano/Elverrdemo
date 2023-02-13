import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import FooterNotLoggedIn from "components/NotLoggedIn/FooterNotLoggedIn";
import FAQ from "../../components/FAQ/FAQ";
import Hire from "components/Hire";
import Basic from "components/Basic";
import ReuseableDes from "components/ReuseableDes";
import Body from "components/body/body";
export default function Home() {
  return (
    <>
      <Head>
        <title>Elverr - The Market Place</title>
        <meta
          name="google-site-verification"
          content="akR2jwmrZi2Uam2Y0H-VUckRGWE7VSQyxO676zfQg_Y"
        />

        <meta
          name="description"
          content="  Elverr is a global self-service platform for live experiences that
              allows anyone to create and share projects, find skilled workers
              and agencies that help you take your ideas to a new level."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Header />
        <Body />
        <Basic />
        <ReuseableDes
          header={"Agency service"}
          subheader={
            "By listing your agency role on our website, you can showcase your expertise and connect with job seekers seeking their next career opportunity"
          }
          image={
            "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676218781/Screenshot_2023-02-12_at_16.18.55_ev3b1i.png"
          }
        />
        <ReuseableDes
          header={"Freelance service"}
          subheader={
            "By listing your job title on our website, you can showcase your expertise and connect with recruiters seeking to give candidate opportunities"
          }
          image={
            "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676218840/Screenshot_2023-02-12_at_16.20.35_do1h6k.png"
          }
        />
        <Hire />
        <FAQ
          firstheader={"What is an IT service?"}
          firsttitle={
            "IT services are services related to the use of information technology (IT) to improve business operations, such as data management, networking, software development, and cybersecurity."
          }
          secondheader={"What types of IT services do you offer?"}
          secondtitle={
            "Our IT services may include data management, networking, software development, cybersecurity, and other services that help businesses improve their operations and productivity."
          }
          thirdheader={"What is included in your IT support services"}
          thirdtitle={
            "Our IT support services may include help with hardware and software installations, troubleshooting technical issues, providing technical guidance and advice, and assisting with the maintenance and management of your IT systems."
          }
          fourthheader={"How do I get started with your IT services"}
          fourthtitle={
            "To get started with our IT services, please contact us to discuss your needs and schedule a consultation. Our team will work with you to understand your business and develop a personalized plan to help you improve your operations and productivity."
          }
        />
        <FooterNotLoggedIn />
      </div>
    </>
  );
}
