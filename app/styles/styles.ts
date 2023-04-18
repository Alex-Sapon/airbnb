const color = {
  primary: '#fff',
  secondary: '#000',
  tertiary: '#9f9f9f',
  header: '#fff',
  searchBG: '#fff',
  searchLogo: '#fa3236',
  searchBorder: '#d3d3d3',
  menuBG: '#fff',
  menuBorder: '#d3d3d3',
  menuText: '#eaeaea',
  modalBG: 'rgba(38, 38, 38, 0.7)',
  contentBG: '#fff',
  headerClose: '#000',
  modalHeaderBorder: '#e5e5e5',
  inputBorderPrimary: 'rgb(212 212 212)',
  inputBorderSecondary: '#000',
  inputBorderError: 'rgb(244 63 94)',
  labelPrimary: 'rgb(161 161 170)',
  labelError: 'rgb(244 63 94)',
  divider: 'rgb(212 212 212)',
};

const fontSize = {
  text_xs: '12px',
  text_sm: '14px',
  text_base: '16px',
  text_lg: '18px',
  text_xl: '20px',
  text_2xl: '24px',
  text_3xl: '30px',
  text_4xl: '36px',
  text_5xl: '48px',
  text_6xl: '60px',
  text_7xl: '72px',
};

const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const lineHeight = {
  leading_none: 1,
  leading_tight: 1.25,
  leading_snug: 1.375,
  leading_normal: 1.5,
  leading_relaxed: 1.625,
  leading_loose: 2,
};

const shadow = {
  header: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  search: 'rgba(99, 99, 99, 0.2) 0 2px 8px 0',
  menu: 'rgba(99, 99, 99, 0.2) 0 2px 8px 0',
  modalContent:
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
};

const size = {
  mobileS: '320px',
  mobileM: '360px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1110px',
  laptopL: '1440px',
  desktop: '1920px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const styles = {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  shadow,
  device,
};
