import {styled} from '@mui/system'

const Button = styled('button')(({theme}) => ({
    borderRadius: theme.spacing(4),
    borderColor: theme.palette.primary.main,
    borderWidth: 0,
    width: '100%',
    padding: theme.spacing(2.5),
}))

export default Button