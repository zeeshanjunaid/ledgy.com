// @flow

import React from 'react';

import { Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { appUrl } from '../helpers';
import { MainHeaderLayout } from './MainHeaderLayout';
import { RequestDemoButton } from './RequestDemoButton';
import { DynamicTrans } from './DynamicTrans';

// eslint-disable-next-line import/prefer-default-export
export const HomePageHeader = ({ i18n, data, prefix }: Props) => {
  const [content] = data.page.edges;
  const title = <DynamicTrans>{content.node.mainHeader}</DynamicTrans>;
  const subtitle = <DynamicTrans>{content.node.description}</DynamicTrans>;
  const tablet = content.node.bannerImage.localFile?.childImageSharp;

  const buttonTwo = {
    props: {
      href: `${appUrl}/signup`,
      cta: false,
    },
    text: <Trans>Get Started Free</Trans>,
  };

  return (
    <MainHeaderLayout
      title={title}
      subtitle={subtitle}
      buttonOne={
        <RequestDemoButton
          prefix={prefix}
          buttonClassName="my-sm-0 my-2 btn-xl d-inline mx-1 btn-red"
        />
      }
      buttonTwo={buttonTwo}
      image={
        <div id="tablet-ledgy" data-aos="fade-up">
          <Img {...tablet} alt={i18n.t`Screenshot of the Ledgy app`} />
        </div>
      }
    />
  );
};
