import {styled} from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    alignItems: 'center',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
}))

export default Container