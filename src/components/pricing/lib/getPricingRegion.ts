const UK = 'uk';
const US = 'us';
const GLOBAL = 'global';

export const getPricingRegion = ({ region }: Region) => {
  switch (region) {
    case UK:
      return UK;
    case US:
      return US;
    default:
      return GLOBAL;
  }
};
