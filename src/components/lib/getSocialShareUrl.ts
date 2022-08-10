export const LINKEDIN = 'LinkedIn';
export const TWITTER = 'Twitter';
export const FACEBOOK = 'Facebook';

export const getSocialShareUrl = ({ platform }: { platform: string }) => {
  const jobUrl =
    typeof window === 'object'
      ? encodeURIComponent(`https://ledgy.com${window.location.pathname}`)
      : undefined;
  switch (platform) {
    case TWITTER:
      return `https://twitter.com/share?url=${jobUrl}&text=${encodeURIComponent(
        'Hey, have a look at this job!'
      )}`;
    case FACEBOOK:
      return `https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`;
    default:
      return `https://www.linkedin.com/sharing/share-offsite/?url=${jobUrl}`;
  }
};
