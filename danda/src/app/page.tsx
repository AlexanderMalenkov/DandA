import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "./layout";
import MainSection from "./components/Sections/MainSection/MainSection";
import InfoSection from "./components/Sections/InfoSection/InfoSection";
import MediaSection from "./components/Sections/MediaSection/MediaSection";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <RootLayout>
      <MainSection />
      <InfoSection />
      <MediaSection />
      <Slider />
    </RootLayout>
  );
}
