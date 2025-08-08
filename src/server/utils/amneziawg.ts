const getRandomInt = (min: number, max: number) => min + Math.floor(Math.random() * (max - min));
const getRandomJunkSize = () => getRandomInt(15, 150);
const getRandomHeader = () => getRandomInt(100_000_000, 2_147_483_647);

export const AMNEZIA_DEFAULTS = {
  JC: parseInt(process.env.JC || '') || getRandomInt(5, 128),
  JMIN: parseInt(process.env.JMIN || '') || getRandomInt(20, 800),
  JMAX: parseInt(process.env.JMAX || '') || getRandomInt(801, 1280),
  S1: parseInt(process.env.S1 || '') || getRandomJunkSize(),
  S2: parseInt(process.env.S2 || '') || getRandomJunkSize(),
  H1: parseInt(process.env.H1 || '') || getRandomHeader(),
  H2: parseInt(process.env.H2 || '') || getRandomHeader(),
  H3: parseInt(process.env.H3 || '') || getRandomHeader(),
  H4: parseInt(process.env.H4 || '') || getRandomHeader(),
};

export const generateAmneziaWGParams = () => ({
  jc: getRandomInt(5, 12),
  jmin: getRandomInt(20, 80),
  jmax: getRandomInt(900, 1400),
  s1: getRandomJunkSize(),
  s2: getRandomJunkSize(),
  h1: getRandomHeader(),
  h2: getRandomHeader(),
  h3: getRandomHeader(),
  h4: getRandomHeader(),
}); 