import './App.css';
import { ArrowButtons } from './components/arrowButtons/ArrowButtons';
import { Hero } from './components/hero/Hero';
import { SliderProvider } from './context/sliderContext';

function App() {
  return (
    <div className="app-container">
      <SliderProvider>
        <Hero />
        <ArrowButtons />
      </SliderProvider>
    </div>
  );
}

export default App;
