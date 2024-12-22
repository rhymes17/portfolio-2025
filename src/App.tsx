import './App.css';
import Header from './components/Header';
import About from './sections/About';
import Hero from './sections/Hero';
import Intro from './sections/Intro';

function App() {
  return (
    <div className="dark:bg-black relative h-full min-h-[100svh] w-full bg-background transition-colors duration-500">
      <Header />
      <Hero />
      <Intro />
      <About />
    </div>
  );
}

export default App;
