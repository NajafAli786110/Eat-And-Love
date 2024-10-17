import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Ahsing, sans-serif',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: 'var(--font-color)',
    },
    h2: {
      fontFamily: 'Ahsing, sans-serif',
      fontSize: '2rem',
      fontWeight: '600',
      color: 'var(--font-color)',
    },
    h3: {
      fontFamily: 'Ahsing, sans-serif',
      fontSize: '1.75rem',
      fontWeight: '500',
      color: 'var(--font-color)',
    },
    h4: {
      fontFamily: 'Ahsing, sans-serif',
      fontSize: '1.5rem',
      fontWeight: '500',
      color: 'var(--font-color)',
    },
    h5: {
      fontFamily: 'Ahsing, sans-serif',
      fontSize: '1.25rem',
      fontWeight: '400',
      color: 'var(--font-color)',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      color: 'var(--font-color)',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '0.875rem',
      color: 'var(--font-color)',
    },
  },
});

export default Theme;
