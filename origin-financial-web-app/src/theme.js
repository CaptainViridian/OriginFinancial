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
}
const typography = {
    info: {
        fontFamily: 'Work Sans',
        fontSize: '0.75rem',
        lineHeight: '18px',
        color: palette.info.main,
    },
}
export const theme = createTheme({
    palette,
    typography,
})