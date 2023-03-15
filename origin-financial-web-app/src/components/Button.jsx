import {styled} from '@mui/system'

const Button = styled('button')(({theme}) => ({
    borderRadius: theme.spacing(4),
    borderColor: theme.palette.primary.main,
    borderWidth: 0,
    width: '100%',
    maxWidth: theme.spacing(40),
    padding: theme.spacing(2),
}))

export default Button