import Header from "./components/Header";
import Hero from "./sections/Hero";
import Features from "./sections/features";
import About from "./sections/about";
import Programs from "./sections/programs";
import Impact from "./sections/impact";
import Testimonials from "./sections/testimonials";
import HowHelp from "./sections/howHelp";
import NewsEvents from "./sections/newsEvents";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Programs />
        <Impact />
        <Testimonials />
        <HowHelp />
        <NewsEvents />
      </main>
    </>
  );
}

export default App;
