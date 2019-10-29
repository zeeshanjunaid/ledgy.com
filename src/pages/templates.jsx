// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { HeaderLayout } from '../components/HomePageHeader';
import { targetBlank, appUrl, trackSignup } from '../layouts/utils';

export default (props: Props) => {
  return (
    <HeaderLayout
      title={<Trans>ESOP & PSOP Templates</Trans>}
      subtitle={
        <Trans>
          Download your employee participation plan templates in a click, or use our term sheet
          generator to customize blah blah
        </Trans>
      }
      buttonOneProps={{
        href: `${appUrl}/templates`,
        onClick: () => trackSignup('clickTemplates'),
        ...targetBlank
      }}
      buttonOneText={<Trans>Launch Templates</Trans>}
      buttonTwoProps={{ href: `${props.prefix}/help/` }}
      buttonTwoText={<Trans>Learn More</Trans>}
      image={
        <div id="tablet-ledgy" data-aos="fade-up">
          {/* <Img {...data.tablet} alt={i18n.t`Screenshot of the Ledgy app`} /> */}
          hi!
        </div>
      }
    />
  );
};

// export const PageQuery = graphql`
//   {
//     query {

//     }
//   }
// `;
