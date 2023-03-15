import {styled} from '@mui/system'
import dollar from '../../assets/dollar.svg'
import PropTypes from 'prop-types'

const Input = styled('input')(({theme}) => ({
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: theme.spacing(0.5),
    border: '1px solid',
    borderColor: theme.palette.input,
    fontSize: '1.5rem',
    lineHeight: '120%',
    fontWeight: 600,
    padding: theme.spacing(1.5, 1.5, 1.5, 4.2),
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,

    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '13px center',
    backgroundImage: `url(${dollar})`,
    overflow: 'hidden',
}))

function CurrencyInput({...props}) {
    return (
        <Input
            type='number'
            {...props}
        />
    )
}

export default CurrencyInput

CurrencyInput.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}