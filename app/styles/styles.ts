const color = {
  primary: '#ffffff',
  secondary: '#000000',
  tertiary: '#9f9f9f',
  complementary: '#f43f5eff',
  searchBorder: '#d3d3d3',
  menuBorder: '#d3d3d3',
  menuText: '#eaeaea',
  modalBG: '#262626b2',
  modalDivider: '#e5e5e5',
  inputBorder: '#d4d4d4ff',
  label: '#a1a1aaff',
  categoriesPrimary: '#737373',
  categoriesSecondary: '#262626',
  imageUpload: '#525252ff',
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
