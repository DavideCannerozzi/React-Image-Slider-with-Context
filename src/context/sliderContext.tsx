import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import sliderImages from '../data/sliderImages';

interface SliderContextProps {
  currentImage: number;
  setCurrentImage: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
  handlePrev: () => void;
}

const SliderContext = createContext<SliderContextProps | undefined>(undefined);

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('Error');
  } else {
    return context;
  }
};

interface SliderProviderProps {
  children: React.ReactNode;
}

export const SliderProvider = ({ children }: SliderProviderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImg) =>
      prevImg === sliderImages.length - 1 ? 0 : prevImg + 1
    );
  };
  const handlePrev = () => {
    setCurrentImage((prevImg) =>
      prevImg === 0 ? sliderImages.length - 1 : prevImg - 1
    );
  };

  return (
    <SliderContext.Provider
      value={{ currentImage, setCurrentImage, handleNext, handlePrev }}
    >
      {children}
    </SliderContext.Provider>
  );
};
