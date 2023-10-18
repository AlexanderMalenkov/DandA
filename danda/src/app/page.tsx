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

import media1 from "./../../public/img/media1.png";
import media2 from "./../../public/img/media2.png";
import media3 from "./../../public/img/media3.png";
import Header from "./components/Sections/Header/Header";
import MediaSectionReversed from "./components/Sections/MediaSection/MediaSectionReversed";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <MainSection />
      <InfoSection />
      <MediaSectionReversed
        image={media1}
        subtitle="Flowers & Plants"
        title="Sourcing flowers, plants, seeds, and organic produce has never been easier"
        text1="D&A IMPEX SPÓŁKA is your go-to destination for all things botanical,
         from cut flowers and indoor plants to seeds, herbs, and gardening essentials."
        text2="Whether you're a gardening enthusiast or a business owner, we offer global 
        access to a diverse range of botanical products, backed by convenient delivery options."
      />
      <Slider />
      <MediaSection
        image={media2}
        subtitle="Logistics Services"
        title="Logistics support for the seamless transportation of your floral and plant goods to your warehouse"
        text1="One of the primary activities of the company is a delivery of seedlings and seeds for your yard, balcony, or mini-garden. 
        All you have to do is place your order and then pick it up in your city. We can also take care of delivery of the goods you ordered."
        text2="This ensures that your products reach you efficiently and in top condition."
      />
      <LargeMediaSecton />
      <Slider />
      <MediaSection
        subtitle="Exotic Plants"
        title="Importation of exotic plants and fruits of any size worldwide,
        large-sized plant transportation"
        image={media3}
        text1="We offer the importation of exotic plants and fruits of any size from any country.
         This feature broadens your product range, allowing you to offer unique and rare botanical items to your customers."
        text2="The company also specializes in the sale and transport of large-sized plants throughout the European Union."
      />
      <BluredSection />
      <FeedbackSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </RootLayout>
  );
}
