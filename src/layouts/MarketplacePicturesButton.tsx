import React from 'react';
import { Button, Icon } from '../components';

export const MarketplacePicturesButton = ({
  totalImageCount,
  currentImage,
  setCurrentImage,
  isNext = false,
}: {
  totalImageCount: number;
  currentImage: number;
  setCurrentImage: (args: number) => void;
  isNext?: boolean;
}) => (
  <Button
    className={'col-1'}
    inverted
    onClick={() => {
      setCurrentImage(currentImage + (isNext ? 1 : -1));
    }}
    disabled={currentImage === (isNext ? totalImageCount - 1 : 0)}
  >
    <Icon icon={`${isNext ? 'next' : 'previous'}`} height={20} width={20} />
  </Button>
);
