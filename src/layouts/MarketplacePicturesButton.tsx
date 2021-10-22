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
}) => {
  const icon = (isNext ? 'next' : 'previous') as IconType;
  return (
    <Button
      className={'col-1'}
      inverted
      onClick={() => {
        setCurrentImage(currentImage + (isNext ? 1 : -1));
      }}
      disabled={currentImage === (isNext ? totalImageCount - 1 : 0)}
    >
      <Icon icon={icon} height={20} width={20} />
    </Button>
  );
};
