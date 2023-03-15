import PropTypes from 'prop-types'
import {styled, useTheme} from '@mui/system'
import {FinancialHealthClassification} from '../../constants'

const Step = styled('div')(({theme, index, color, isColored}) => ({
    width: theme.spacing(11.4),
    height: theme.spacing(2),
    border: '2px solid #FFF',
    background: isColored ? color : 'transparent',
    borderRadius: theme.spacing(3),
    marginLeft: theme.spacing(-1),
    zIndex: Math.abs(4 - index),
    boxSizing: 'border-box',

    [theme.breakpoints.up('md')]: {
        width: theme.spacing(18),
        height: theme.spacing(3),
        marginLeft: theme.spacing(-2),
    },
}))

const ProgressBarContainer = styled('div')(({theme}) => ({
    display: 'flex',
    paddingLeft: theme.spacing(1),

}))

const steps = [1, 2, 3]
const {HEALTHY, MEDIUM, LOW} = FinancialHealthClassification

const coloredSteps = {
    [HEALTHY]: 3,
    [MEDIUM]: 2,
    [LOW]: 1,
}


function Progress({assessmentResult}) {
    const theme = useTheme()
    const colors = {
        [HEALTHY]: theme.palette.success.main,
        [MEDIUM]: theme.palette.warning.main,
        [LOW]: theme.palette.error.main,
    }
    const color = colors[assessmentResult]
    return (
        <ProgressBarContainer>
            {steps.map((stepId) => (
                <Step
                    key={stepId}
                    index={stepId}
                    color={color}
                    isColored={coloredSteps[assessmentResult] - stepId >= 0}
                />
            ))}
        </ProgressBarContainer>
    )
}


Progress.propTypes = {
    assessmentResult: PropTypes.string.isRequired,
}

export default Progress