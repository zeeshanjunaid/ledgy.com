type InvestorProps = { name: string; description: string };

export const getInvestorDescriptions = (): {
  [key: string]: InvestorProps;
} => ({
  btov: {
    name: 'btov Partners',
    description: 'Europe’s symbiosis of early-stage VC funds and private investor network',
  },
  creathor: {
    name: 'Creathor Ventures',
    description: 'Backing the creators of our future since 1984',
  },
  vipartners: {
    name: 'VI Partners',
    description: 'Healthcare & technology venture capital since 2001',
  },
  paul: {
    name: 'Dr. Paul E. Sevinç',
    description: 'Entrepreneur, technologist, founder of Doodle.com',
  },
  daniel: {
    name: 'Daniel Gutenberg',
    description: 'One of the most active Swiss early-stage angel investors',
  },
  luis: {
    name: 'Luis Cabiedes',
    description: 'Leading Spanish investor in early-stage technology startups',
  },
  myke: {
    name: 'Myke Näf',
    description: 'Entrepreneur, business angel, founder of Doodle.com',
  },
  cyrill: {
    name: 'Cyrill Osterwalder',
    description: 'Digital entrepreneur and investor. Security, crypto & privacy exper',
  },
  luzius: {
    name: 'Luzius Meisser',
    description: 'Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala',
  },
  adrian: {
    name: 'Adrian Bührer',
    description: 'Investor & consultant (Farmy.ch, Flatfox.ch), founder of Students.ch',
  },
  elena: {
    name: 'Elena Walder-Schiavone',
    description:
      'M&A and private equity lawyer with a focus on start-up legal advise, Smartuplaw.ch',
  },
});
