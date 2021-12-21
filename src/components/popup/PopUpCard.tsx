import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { ClosingButton, CustomFade, SubscriptionForm } from '..';

const NEWSLETTER = 'newsletter';
const HIDE_MESSAGE_DELAY = 4000;
const MILLISECONDS_PER_SECOND = 1000;

export const PopUp = ({ popup }: { popup: Popup }) => {
  const [show, setShow] = useState(false);
  const [isSubmited, setSubmited] = useState(false);
  const { type, delay } = popup;

  const hide = () => setShow(false);

  const subscribe = () => {
    setSubmited(true);
    setTimeout(() => {
      hide();
    }, HIDE_MESSAGE_DELAY);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay * MILLISECONDS_PER_SECOND);
  }, []);

  switch (type) {
    case NEWSLETTER:
      return show ? (
        <CustomFade translate="0, 100px" className="position-relative z-index-base">
          <div className="popup-cont p-4">
            <div className="popup p-3 pb-0 col-lg-5 col-sm-12 offset-lg-7 col-md-6 offset-md-3 bg-blue border border-white">
              <ClosingButton hide={hide} />
              {!isSubmited && (
                <>
                  <h5 className="m-0 my-0 d-inline-block text-gray-light">Stay up to date! 🎉</h5>
                  <p className=" mb-2 d-block font-weight-light">
                    Subscribe to our <b>newsletter</b> and recieve the latest insights on the{' '}
                    <b>equity world</b> 🌍
                  </p>
                  <SubscriptionForm trackingEvent="newsletter" callBack={subscribe} />
                </>
              )}
              {isSubmited && (
                <>
                  <h5 className="m-2 text-gray-light text-center">
                    Thank you for your subscription 🎉
                  </h5>
                </>
              )}
            </div>
          </div>
        </CustomFade>
      ) : null;
    default:
      return null;
  }
};

const popupQuery = graphql`
  {
    allContentfulPagePopup {
      edges {
        node {
          url
          popup {
            type
            delay
          }
        }
      }
    }
  }
`;

const getPagePopup = (pages: PagePopup[], pathname: string) => {
  return pages.filter((page) => {
    const { url, popup } = page.node;
    const validURL = new RegExp(`^/${url}/.+`, 'g');
    if (!validURL.test(pathname) || !popup) return false;
    return true;
  });
};

export const PopUpCard = ({ pathname }: { pathname: string }) => {
  const result = useStaticQuery(popupQuery);
  const pages: PagePopup[] = result.allContentfulPagePopup.edges;
  const [pagePopup] = getPagePopup(pages, pathname);
  if (!pagePopup) return null;
  const { popup } = pagePopup.node;
  return popup ? <PopUp popup={popup} /> : null;
};
