const SWIPECONFIDENCETHRESHOLD = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const onSwipe = ({
  offsetX,
  velocityX,
  activeIndex,
  testimonialsLength,
  setActiveIndex,
}: {
  offsetX: number;
  velocityX: number;
  activeIndex: number;
  testimonialsLength: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  {
    const swipe = swipePower(offsetX, velocityX);
    if (swipe < -SWIPECONFIDENCETHRESHOLD) {
      if (activeIndex === testimonialsLength - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    } else if (swipe > SWIPECONFIDENCETHRESHOLD) {
      if (activeIndex !== 0) {
        setActiveIndex(activeIndex - 1);
      } else {
        setActiveIndex(testimonialsLength - 1);
      }
    }
  }
};
