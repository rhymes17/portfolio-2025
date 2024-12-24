import './App.css';
import Header from './components/Header';
import About from './sections/About';
import ExperienceV2 from './sections/ExperienceV2';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="relative h-full min-h-[100svh] w-full bg-background transition-colors duration-700 dark:bg-black">
      <Header />
      <Hero />
      <Intro />
      <About />
      <div className="bg-black">
        <ExperienceV2 />
      </div>
      <div className="relative">
        <div className="sticky top-0">
          <Skills />
        </div>
        <Projects />
      </div>
      <div className="min-h-[100vh]"></div>
    </div>
  );
}

export default App;
