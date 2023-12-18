import { useSlider } from '../../context/sliderContext';
import './HeroImage.css';

interface HeroImageProps {
  slider: {
    id: number;
    url: string;
    alt: string;
    text: string;
  };
  id: number;
}

export const HeroImage = ({ slider, id }: HeroImageProps) => {
  const { currentImage } = useSlider();

  return (
    <div
      key={id}
      className="hero-image"
    >
      <img
        src={slider.url}
        alt={slider.alt}
        style={{ display: id === currentImage ? 'block' : 'none' }}
      />
    </div>
  );
};
