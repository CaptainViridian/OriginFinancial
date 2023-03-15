import {styled} from '@mui/system'
import LabeledCurrencyInput from './LabeledCurrencyInput'
import Button from '../Button'
import PropTypes from 'prop-types'
import {useState} from 'react'


const Form = styled('form')(({theme}) => ({
    padding: theme.spacing(0, 2),
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '100%',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0),
        gap: theme.spacing(4),
    },
}))

const FieldsContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}))

const SubmitButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
}))

const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
})
export default function AssessmentForm({onSubmit}) {

    const [annualIncome, setAnnualIncome] = useState(0)
    const [monthlyCosts, setMonthlyCosts] = useState(0)

    return (
        <Form onSubmit={function (e) {
            e.preventDefault()
            if(!annualIncome || annualIncome <= 0) {
                alert('Annual income must be provided and be greater than 0')
                return
            }
            if(!monthlyCosts || monthlyCosts <= 0) {
                alert('Monthly costs must be provided and be greater than 0')
                return
            }
            onSubmit(annualIncome, monthlyCosts)
        }}>
            <FieldsContainer>
                <LabeledCurrencyInput required value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} labelText='Annual income'/>
                <LabeledCurrencyInput required value={monthlyCosts} onChange={(e) => setMonthlyCosts(e.target.value)} labelText='Monthly costs'/>
            </FieldsContainer>
            <ButtonContainer>
                <SubmitButton sx={{typography: 'buttonText'}} type='submit'>Continue</SubmitButton>
            </ButtonContainer>
        </Form>
    )
}
AssessmentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}