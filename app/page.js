import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header/Header";
import { MainSection } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Cases } from "./components/Cases/Cases";
import { Faq } from "./components/Faq/Faq";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "112px" }}>
        <MainSection />
        <About />
        <Cases />
        <Faq />
        <Contacts />
        <Footer />
      </main>
      <Toaster />
    </>
  );
}
