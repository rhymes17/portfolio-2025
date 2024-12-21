import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="relative h-full min-h-[100svh] w-full bg-background">
      <Header />
      <div className="h-[200vh]">
        <img src="https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=2879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}

export default App;
