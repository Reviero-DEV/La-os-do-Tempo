import Header from "./components/Header";
import Hero from "./sections/Hero";
import Features from "./sections/features";
import About from "./sections/about";
import Impact from "./sections/impact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Impact />
      </main>
    </>
  );
}

export default App;
