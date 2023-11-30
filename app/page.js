import { Header } from "./components/Header/Header";
import { MainSection } from "./components/Main/Main";
import { About } from "./components/About/About";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "112px" }}>
        <MainSection />
        <About />
      </main>
    </>
  );
}
