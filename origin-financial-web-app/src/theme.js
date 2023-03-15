import {createTheme} from '@mui/system'

const palette = {
    text: {
        main: '#1E2A32',
        secondary: '#4D6475',
    },
    primary: {
        main: '#001C95',
    },
    info: {
        main: '#708797',
    },
    success: {
        main: '#04C761',
    },
    warning: {
        main: '#FFC032',
    },
    error: {
        main: '#D32A36',
    },
    background: '#F4F8FA',
    input: '#E9EEF2',
}
const typography = {
    h1: {
        fontFamily: 'Rubik',
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: '120%',
        color: palette.text.main,
    },
    h2: {
        fontFamily: 'Work Sans',
        lineHeight: '27px',
        fontSize: '1.125rem',
        fontWeight: 400,
        color: palette.primary.main,
    },
    h4: {
        fontFamily: 'Work Sans',
        lineHeight: '150%',
        fontWeight: 400,
        fontSize: '0.875rem',
        color: palette.info.main,
    },
    h4Result:  {
        fontFamily: 'Work Sans',
        lineHeight: '150%',
        fontWeight: 400,
        fontSize: '0.875rem',
        color: palette.text.secondary,
    },
    info: {
        fontFamily: 'Work Sans',
        fontSize: '0.75rem',
        lineHeight: '18px',
        color: palette.info.main,
    },
    label: {
        fontFamily: 'Work Sans',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight:'150%',
    },
    buttonText: {
        fontFamily: 'Work Sans',
        fontSize: '1rem',
        fontWeight: 500,
    },
}
export const theme = createTheme({
    palette,
    typography,
})