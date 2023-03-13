import {styled} from '@mui/system'
import CurrencyInput from './CurrencyInput'
import PropTypes from 'prop-types'

const Label = styled('label')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '0.875rem',
    },
}))

const LabeledCurrencyInput = ({labelText}) => (
    <div>
        <Label sx={{typography: 'label'}}>{labelText}</Label>
        <CurrencyInput type='number'/>
    </div>
)

LabeledCurrencyInput.propTypes = {
    labelText: PropTypes.string,
}

export default LabeledCurrencyInput