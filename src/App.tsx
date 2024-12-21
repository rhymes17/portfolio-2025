import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="relative h-full min-h-[100svh] w-full bg-background">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
