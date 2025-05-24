import Header from "../components/header";
import HeroComponent from "../components/HeroComponent";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import MusicPlayer from "../components/Sermon";
import Executives from "../components/Executives";


export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
  <Header/>
  <HeroComponent/>
  <ServicesSection/>
  <MusicPlayer />
  <Executives/>
  <BlogSection/>

  <Testimonials/>
  <Footer/>
   </>
  )
}