import Header from './components/Header'
import Footer from './components/Footer'
import '@fontsource/work-sans'
import {styled} from '@mui/system'

const AppRoot = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
    },
}))

function App() {
    return (
        <AppRoot>
            <Header />

            <Footer />
        </AppRoot>
    )
}

export default App
