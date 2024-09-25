module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        'sub-zero': '-1',
        999: '999',
      },
      screens: {
        '3xl': '1600px',
        '3.5xl': '1800px',
        '4xl': '2000px',
        '5xl': '2400px',
      },
      boxShadow: {
        line: '0 3px 7px rgb(0 0 0 / 40%)',
      },
      keyframes: {
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(180deg)' },
          '100%': { filter: 'hue-rotate(0deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '25%': { opacity: '25' },
          '50%': { opacity: '50' },
          '100%': { opacity: '100' },
        },
        'fade-out': {
          '0%': { opacity: '100' },
          '25%': { opacity: '50' },
          '50%': { opacity: '25' },
          '100%': { opacity: '0' },
        },
        'side-to-up': {
          '0%': { left: '-40px', top: '23px' },
          '25%': { left: '-999px', top: '23px' },
          '50%': { left: '-999px', top: '-999px' },
          '100%': { right: '50px', top: '0px' },
        },
        'up-to-side': {
          '0%': { right: '50px', top: '0px' },
          '25%': { right: '40px', top: '-999px' },
          '50%': { left: '-999px', top: '23px' },
          '100%': { left: '0px', top: '23px' },
        },
        'scale-105': {
          '0%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.05)' },
        },
        // right-0 top-1/2 -translate-y-2/3 opacity-0
        'slide-to-view': {
          '0%': {
            opacity: '0',
            right: '-10px',
            top: '50%',
            transform: 'translateY(-66%)',
          },
          '100%': {
            opacity: '100',
            right: '0px',
            top: '50%',
            transform: 'translateY(-66%) ',
          },
        },
        'fade-in-out': {
          '0%': { opacity: '0' },
          '38%': { opacity: '0' },
          '43%, 60%': { opacity: '100' },
          '68%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'hue-rotate': 'hue-rotate 2.5s ease-in-out infinite',
        'scale-105': 'scale-105 0.25s ease-in-out',
        'side-to-up': 'side-to-up 0.50s ease-in-out 1 forwards',
        'up-to-side': 'up-to-side 0.50s ease-in-out 1 forwards',
        'slide-to-view': 'slide-to-view 0.35s ease-in-out 1 forwards',
        'fade-in': 'fade-in 0.75s ease-in-out 1',
        'fade-in-nodelay': 'fade-in ease-in-out 1.5s',
        'fade-out-nodelay': 'fade-out 1.5s ease-in-out 1 forwards',
        'fade-out': 'fade-out 0.75s ease-in-out 1 forwards',
        'fade-in-out': 'fade-in-out 8s ease-in-out forwards',
      },
      scale: {
        35: '0.35',
        40: '0.40',
        45: '0.45',
        50: '0.50',
        55: '0.55',
        60: '0.60',
        65: '0.65',
        675: '0.675',
        70: '0.70',
        80: '0.80',
        85: '0.85',
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04',
      },
      spacing: {
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        22: '5.5rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        114: '18rem',
        116: '20rem',
        118: '22rem',
        119: '23rem',
        120: '24rem',
        122: '26rem',
        124: '28rem',
        126: '30rem',
        128: '32rem',
        144: '36rem',
        148: '40rem',
        152: '44rem',
        156: '48rem',
        160: '52rem',
      },
    },
    fontSize: {
      '4xs': '.675rem',
      '3xs': '.7rem',
      '2xs': '.725rem',
      xs: '.75rem',
      sm: '.85rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '11rem',
      '13xl': '12rem',
      '14xl': '14rem',
      '15xl': '15rem',
      '16xl': '16rem',
      '17xl': '17rem',
      '18xl': '18rem',
      '19xl': '19rem',
      '34xl': '34rem',
      '45xl': '45rem',
      '50xl': '50rem',
      '55xl': '55rem',
      '60xl': '60rem',
      '65xl': '65rem',
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      poppins: ['Poppins'],
      tiempos: ['Tiempos'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        100: '#ffffff',
        200: '#f8f8f8',
      },
      gray: {
        100: '#f1f1f4',
        200: '#828495',
      },
      black: {
        100: '#060b43',
        200: '#050b1f',
      },
      teal: {
        100: '#4be6c9',
        200: '#25e0be',
      },
      purple: {
        100: '#7c49e9',
        200: '#6f37e6',
      },
      pink: {
        100: '#fd7382',
        200: '#ec5f6e',
      },
    },
  },
  plugins: [],
};
