import {styled} from '@mui/system'
import CurrencyInput from './CurrencyInput'
import PropTypes from 'prop-types'

const Label = styled('label')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '0.875rem',
    },
}))

const LabeledCurrencyInput = ({labelText, id, ...props}) => (
    <div>
        <Label htmlFor={id} sx={{typography: 'label'}}>{labelText}</Label>
        <CurrencyInput id={id} {...props} />
    </div>
)

LabeledCurrencyInput.propTypes = {
    labelText: PropTypes.string,
    id: PropTypes.string.isRequired,
}

export default LabeledCurrencyInput