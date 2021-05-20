import React, { ReactNode } from 'react';
import { Trans } from '@lingui/macro';

type companyPricingCtaProps = { title: React.ReactNode; description: React.ReactNode };
const companyPricingCtas: companyPricingCtaProps[] = [
  {
    title: (
      <>
        <Trans>Do you tackle the climate crisis?</Trans>{' '}
        <span role="img" aria-label="earth">
          🌍
        </span>
      </>
    ),
    description: (
      <Trans>
        You get a 20% discount on Growth if your startup helps reduce carbon emissions.{' '}
        <a href="mailto:sales@ledgy.com?subject=Eco-Friendly Discount Application">
          Tell us about your impact!
        </a>
      </Trans>
    ),
  },
  {
    title: (
      <>
        <Trans>Do you have less than €2m in funding?</Trans>{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </>
    ),
    description: (
      <Trans>
        Only pay half the price during your first year on Ledgy.{' '}
        <a href="mailto:sales@ledgy.com?subject=Startup Discount Application">Send us a message</a>{' '}
        and you’ll receive a discount.
      </Trans>
    ),
  },
  {
    title: (
      <>
        <Trans>Are you crowdfunded?</Trans>{' '}
        <span role="img" aria-label="unicorn">
          🦄
        </span>
      </>
    ),
    description: (
      <Trans>
        Pay much less if you have many non-voting stakeholders on your cap table.{' '}
        <a href="mailto:sales@ledgy.com?subject=Crowdfunded Startup on Ledgy">Contact us</a> to get
        a quote.
      </Trans>
    ),
  },
];

const CompanyPricingCta = ({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) => (
  <div className="col-12 col-lg-6 col-xl-4">
    <h5>{title}</h5>
    <p className="pb-5">{description}</p>
  </div>
);

export const CompanyPricingCtas = () => (
  <div className="container">
    <div className="row text-center justify-content-center my-7">
      {companyPricingCtas.map((v) => {
        const { title, description } = v;
        return (
          <CompanyPricingCta
            title={title}
            description={description}
            key={`company-pricing-cta-${title}`}
          />
        );
      })}
    </div>
  </div>
);
