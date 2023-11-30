import { Header } from "./components/Header/Header";
import { MainSection } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Cases } from "./components/Cases/Cases";
import { Faq } from "./components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "112px" }}>
        <MainSection />
        <About />
        <Cases />
        <Faq />
      </main>
    </>
  );
}
