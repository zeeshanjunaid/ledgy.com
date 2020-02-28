// @flow

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import { DynamicTrans } from '../components/DynamicTrans';

const getUnderlineHtml = (text: string): string => text.replace('_', '<u>').replace('_', '</u>');

export const SellingProp = ({
  title,
  description,
  link,
  linkTo,
  image,
  imgFirst = false
}: {|
  title: string,
  description: string,
  link: string,
  linkTo: string,
  image: Image,
  imgFirst?: boolean
|}) => (
  <div className="container text-center p-4 p-lg-7 my-7">
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-md-6 col-lg-7 d-flex flex-column text-left">
        <h2
          className="custom-underline"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: getUnderlineHtml(title) }}
        />
        <p className="my-4">
          <DynamicTrans>{description}</DynamicTrans>
        </p>
        <Link href to={linkTo} className="d-flex align-items-center">
          <FontAwesomeIcon icon={faArrowCircleRight} className="fa-sm" />
          <span className="deco-link ml-2">
            <DynamicTrans>{link}</DynamicTrans>
          </span>
        </Link>
      </div>
      <div
        className={`col-12 col-md-6 col-lg-5 py-3 px-2 px-md-4 ${imgFirst ? 'order-md-first' : ''}`}
      >
        <Img {...image.localFile.childImageSharp} />
      </div>
    </div>
  </div>
);
