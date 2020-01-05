const props = {
  base: {
    light: '#23272d',
    avatarBg: '#2e333b',
  },
  grey: {
    base: '#eee',
    semiBase: '#ccc',
    light: '#e6e5e5',
    semiDark: '#aaa',
    dark: '#383838',
  },
  red: {
    base: '#581a1a',
  },
  shadow: {
    base: 'rgba(0, 0, 0, .12) 0 1px 6px',
    dark: 'rgba(0, 0, 0, .2) 0 1px 6px',
  },
  purple: '#642773',
  white: '#fff',
  padding: {
    sm: 10,
    md: 20,
    lg: 50,
  },
  link: {
    bg: {
      active: `linear-gradient(
          to top,
          rgb(31, 37, 42),
          rgb(34, 40, 46) 50%,
          rgb(38, 45, 53) 76%,
          rgb(40, 48, 59));`,
      normal: 'transparent',
    },
  },
};

const media = {
  mobileS: '(min-width: 320px)',
  mobileM: '(min-width: 375px)',
  mobileL: '(min-width: 425px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  laptopL: '(min-width: 1440px)',
  desktop: '(min-width: 1920px)',
  desktopL: '(min-width: 2560px)',
};

const theme = {
  ...props,
  media: { ...media },
  headerBg: '#363030',
  primary: '#141619',
  accent: props.purple,
  secondary: '#1b1e22',
  borderColor: props.grey.semiBase,
  baseFontColor: '#484747',
  darkFontColor: '#111315',
  success: '#1a3e24',
  error: props.red.base,
  white: props.white,
  borderRadius: {
    button: '25px',
  },
};

export default theme;
