import React from 'react';
import sliderImages from '../../data/sliderImages';
import { HeroImage } from '../heroImage/HeroImage';

export const Hero = () => {
  return (
    <div>
      {sliderImages.map((slider, id) => {
        return (
          <HeroImage
            slider={slider}
            id={id}
          />
        );
      })}
    </div>
  );
};
