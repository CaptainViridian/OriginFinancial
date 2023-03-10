import {styled} from '@mui/system'

const Card = styled('main')(({theme}) => ({
    backgroundColor: 'white',
    boxShadow: '0px 2px 10px rgba(30, 42, 50, 0.08)',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
}))

export default Card