import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "./layout";
import MainSection from "./components/Sections/MainSection/MainSection";
import InfoSection from "./components/Sections/InfoSection/InfoSection";
import MediaSection from "./components/Sections/MediaSection/MediaSection";
import Slider from "./components/Slider/Slider";
import LargeMediaSecton from "./components/Sections/LargeMediaSection/LargeMediaSecton";
import BluredSection from "./components/Sections/BluredSection/BluredSection";
import FeedbackSection from "./components/Sections/FeedbackSection/FeedbackSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import FaqSection from "./components/Sections/FaqSection/FaqSection";
import Footer from "./components/Sections/Footer/Footer";

export default function Home() {
  return (
    <RootLayout>
      <MainSection/>
      <InfoSection />
      <MediaSection />
      <Slider />
      <MediaSection />
      <LargeMediaSecton />
      <Slider />
      <MediaSection />
      <BluredSection />
      <FeedbackSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </RootLayout>
  );
}
