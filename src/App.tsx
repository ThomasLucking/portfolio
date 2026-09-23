import { Header } from "@/components/Header";
import { Terminal } from "@/components/Terminal";
import { Intro } from "@/components/Intro";
import { Section } from "@/components/Section";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export function App() {
  return (
    <main className="max-w-[680px] mx-auto pt-[8vh] px-6 pb-[10vh]">
      <Header />
      <Terminal />
      <Intro />
      
      <Section id="skills" label="skills">
        <Skills />
      </Section>
      <Section id="get-in-touch" label="get in touch">
        <Contacts />
      </Section>
      <Footer />
    </main>
  );
}

export default App;
