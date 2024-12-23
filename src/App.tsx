import './App.css';
import Header from './components/Header';
import About from './sections/About';
import ExperienceV2 from './sections/ExperienceV2';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="dark:bg-black relative h-full min-h-[100svh] w-full bg-background transition-colors duration-700">
      <Header />
      <Hero />
      <Intro />
      <About />
      <div className="bg-black">
        <ExperienceV2 />
      </div>
      <Skills />
      <div className="h-[100vh]"></div>
    </div>
  );
}

export default App;
