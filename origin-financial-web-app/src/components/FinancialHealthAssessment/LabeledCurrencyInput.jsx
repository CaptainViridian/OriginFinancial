import {styled} from '@mui/system'
import CurrencyInput from './CurrencyInput'
import PropTypes from 'prop-types'

const Label = styled('label')({})

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