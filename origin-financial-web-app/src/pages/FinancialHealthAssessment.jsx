import {styled} from '@mui/system'
import originLogo from '../assets/logo.svg'
import Button from '../components/Button'
import TextWithStrong from '../components/TextWithStrong'
import Card from '../components/Card'
import LabeledCurrencyInput from '../components/FinancialHealthAssessment/LabeledCurrencyInput'

const Container = styled('div')(({theme}) => ({
    padding: theme.spacing(2),
}))

const Icon = styled('img')({})

const TitleContainer = styled('div')({
    textAlign: 'center',
})

const AssessmentTitle = styled('h2')({
    textAlign: 'center',
})

const formText = (component) => styled(component)({
    margin: 0,
})

const FormTitle = formText('h1')

const FormSubtitle = formText('h4')

const Form = styled('form')(({theme}) => ({
    padding: theme.spacing(0, 2),
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '100%',
    gap: theme.spacing(2),
}))


const SubmitButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
}))

export default function FinancialHealthAssessment() {
    return (
        <Container>
            <AssessmentTitle sx={{typography: 'h2'}}>
                <TextWithStrong weak={'Let\'s find out your'} strong={'financial wellness score'}/>
            </AssessmentTitle>

            <Card>
                <Icon src={originLogo} alt='Origin Financial logo'/>
                <TitleContainer>
                    <FormTitle sx={{typography: 'h1'}}>Financial wellness test</FormTitle>
                    <FormSubtitle sx={{typography: 'h4'}}>Enter your financial information below</FormSubtitle>
                </TitleContainer>
                <Form>
                    <LabeledCurrencyInput labelText='Annual income'/>
                    <LabeledCurrencyInput labelText='Monthly costs'/>
                    <SubmitButton type='submit'>Continue</SubmitButton>
                </Form>
            </Card>
        </Container>
    )
}
