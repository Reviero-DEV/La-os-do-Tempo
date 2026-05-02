import Header from "./components/Header";
import Hero from "./sections/Hero";
import Features from "./sections/features";
import About from "./sections/about";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
    </>
  );
}

export default App;
