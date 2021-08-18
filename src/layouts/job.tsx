import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { i18n } from '@lingui/core';

import { dynamicI18n, loadScript } from '../helpers';
import { PageHeader } from '../components';
import { Title } from './utils';

let iframe: null | UntypedObject;

const loadApplicationForm = async (greenhouseId: string) => {
  if (!window.Grnhse) {
    await loadScript('https://boards.eu.greenhouse.io/embed/job_board/js?for=ledgy');
  }
  iframe = window.Grnhse?.Iframe.load(greenhouseId);
};

const unloadApplicationForm = () => {
  if (iframe) iframe.htmlElement = null;
};

const JobPage = ({ data, lang }: Props & { data: { greenhouseJobPost: GreenhouseJobProps } }) => {
  const { title, content, greenhouseId, location } = data.greenhouseJobPost;
  if (!data) return null;

  useEffect(() => {
    loadApplicationForm(greenhouseId);
    return unloadApplicationForm;
  }, []);

  return (
    <div>
      <Title
        title={dynamicI18n(title)}
        section={i18n._('Career')}
        description={dynamicI18n(location.name)}
      />
      <PageHeader
        lang={lang}
        documentLang="en"
        title={dynamicI18n(title)}
        subtitle={dynamicI18n(location.name)}
        textCenter
      />
      <div className="container container-small">
        <div className="d-flex justify-content-center mb-4 mb-lg-5">
          <div dangerouslySetInnerHTML={{ __html: content }} className="markdown" />
        </div>
        <div className="d-flex justify-content-center mb-4 mb-lg-5">
          <div id="grnhse_app" className="w-100 markdown" />
        </div>
      </div>
    </div>
  );
};

export default JobPage;

export const jobPageQuery = graphql`
  query ($id: String!) {
    greenhouseJobPost(id: { eq: $id }) {
      ...GreenhouseJobFragment
    }
  }
`;
