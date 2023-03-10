import {styled} from '@mui/system'
import lockIcon from '../assets/lock.svg'

const Footer = styled('footer')(({theme}) => ({
    padding: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
    },
}))

const flexItem = (component) => styled(component)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 1),
    },
}))

const divFlexItem = flexItem('div')
const LockContainer = styled(divFlexItem)({
    display: 'flex',
    justifyContent: 'center',
})

const LockImg = styled('img')({
    width: 20,
})

const textFlexItem = flexItem('p')
const Text = styled(textFlexItem)({
    textAlign: 'center',
})

const securityNotice = 'Your financial information is encrypted and secure. ' +
    'We\'ll never share or sell any of your personal data.'

export default function AppFooter() {
    return (
        <Footer sx={{typography: 'info'}}>
            <LockContainer>
                <LockImg src={lockIcon}/>
            </LockContainer>
            <Text>{securityNotice}</Text>
        </Footer>
    )
}
