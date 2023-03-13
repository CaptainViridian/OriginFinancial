import {styled} from '@mui/system'
import originLogo from '../assets/logo.svg'
import Button from '../components/Button'
import TextWithStrong from '../components/TextWithStrong'
import Card from '../components/Card'
import LabeledCurrencyInput from '../components/FinancialHealthAssessment/LabeledCurrencyInput'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'

const Icon = styled('img')({})

const CardHeader = styled('div')(({theme}) => ({
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
}))

const CardTitleContainer = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        textAlign: 'left',
    },
    textAlign: 'center',
}))

const formText = (component) =>
    styled(component)({
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

export default function FinancialHealthAssessment() {
    // useEffect(() => {
    //     postFinancialHealthEvaluation({annualIncome: '100', monthlyCosts: '100'})
    //         .then(result => setHealthAssessmentResult(result))
    // }, [])

    return (
        <Container>
            <PageTitle sx={{typography: 'h2'}}>
                <TextWithStrong
                    weak={'Let\'s find out your'}
                    strong={'financial wellness score.'}
                />
            </PageTitle>

            <Card>
                <CardHeader>
                    <Icon src={originLogo} alt='Origin Financial logo'/>
                    <CardTitleContainer>
                        <FormTitle sx={{typography: 'h1'}}>
                            Financial wellness test
                        </FormTitle>
                        <FormSubtitle sx={{typography: 'h4'}}>
                            Enter your financial information below
                        </FormSubtitle>
                    </CardTitleContainer>
                </CardHeader>
                <Form>
                    <FieldsContainer>
                        <LabeledCurrencyInput labelText='Annual income'/>
                        <LabeledCurrencyInput labelText='Monthly costs'/>
                    </FieldsContainer>
                    <ButtonContainer>
                        <SubmitButton sx={{typography: 'buttonText'}} type='submit'>Continue</SubmitButton>
                    </ButtonContainer>
                </Form>
            </Card>
        </Container>
    )
}
