import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSlider } from '../../context/sliderContext';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ArrowButtons.css';

export const ArrowButtons = () => {
  const { handleNext, handlePrev } = useSlider();

  return (
    <div className="buttons">
      <button
        onClick={handlePrev}
        className="prev-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={handleNext}
        className="next-button"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
