import Media from "./component/Media/Media";
import Feedback from "./component/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import MainSlide from "./component/MainSlide/MainSlide";
import MainScreen from "./component/MainScreen/MainScreen";
import Navbar from "@/components/Navbar";
import { Header } from "./component/Header/Header";

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Header />
      <MainScreen />
      <MainSlide />
      <div className="flex flex-col gap-20 lg:gap-35 py-15 max-w-[1180px] m-auto">
        <Feedback />
        <Media />
      </div>
      <Footer />
    </>
  );
}
