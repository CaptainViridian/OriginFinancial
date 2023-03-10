import titleLogo from '../assets/title.svg'
import {styled} from '@mui/system'

const Header = styled('header')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
}))

export default function AppHeader() {
    return (
        <Header>
            <img src={titleLogo} alt='Origin Logo'/>
        </Header>
    )
}
