import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Section } from './Section';
import { LinkWithChevron } from './LinkWithChevron';

const TestimonialCard = ({ card, prefix }: { card: TestimonialCardProps; prefix: string }) => {
  const { logo, signature, text, linkText, linkPath } = card;
  const { childImageSharp } = logo?.localFile || {};

  return (
    <div className="col-12 mb-4 mb-xl-0 col-xl-6">
      <div className="p-4 p-lg-5 card-border-style h-100 d-flex flex-column justify-content-between">
        <div>
          {!!childImageSharp && <Img {...childImageSharp} />}
          <div className="my-5">
            <MDXRenderer>{text.childMdx.body}</MDXRenderer>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p className="my-0 text-muted flex-1">{signature}</p>
          {!!(linkText && linkPath) && (
            <LinkWithChevron
              to={linkPath}
              text={linkText}
              className="my-0 d-flex align-items-end justify-content-end flex-1"
              prefix={prefix}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const TestimonialCards = ({ cards, prefix }: TestimonialCardsProps & { prefix: string }) => (
  <Section>
    <div className="row">
      {cards.map((v) => (
        <TestimonialCard key={v.signature} card={v} prefix={prefix} />
      ))}
    </div>
  </Section>
);
