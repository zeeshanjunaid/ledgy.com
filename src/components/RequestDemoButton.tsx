import React from 'react';
import { Link } from 'gatsby';

import { Button } from './Button';
import { demoPage } from '../helpers';
import { DynamicTrans } from './DynamicTrans';

const DEMO_BUTTON_TEXT = 'Book a Demo';

export const RequestDemoButton = ({
  buttonClassName,
  prefix,
  location,
  buttonText = DEMO_BUTTON_TEXT,
}: {
  buttonClassName: string;
  prefix: string;
  location?: LocationProps;
  buttonText?: string;
}) => {
  const isDemoPage = !!location && location.pathname.includes('demo');
  const ButtonText = <DynamicTrans>{buttonText}</DynamicTrans>;

  return isDemoPage ? (
    <Button
      cta
      className={buttonClassName}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    >
      {ButtonText}
    </Button>
  ) : (
    <>
      <Link to={`${prefix}${demoPage}`}>
        <Button className={buttonClassName}>{ButtonText}</Button>
      </Link>
    </>
  );
};
