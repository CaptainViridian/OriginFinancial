import {styled} from '@mui/system'
import originLogo from '../assets/logo.svg'
import TextWithStrong from '../components/TextWithStrong'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PropTypes from 'prop-types'
import AssessmentForm from '../components/FinancialHealthAssessment/AssessmentForm'
import {postFinancialHealthEvaluation} from '../http/connection'

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


export default function FinancialHealthAssessment({onSubmit}) {

    function submitForm(annualIncome, monthlyCosts) {
        postFinancialHealthEvaluation({annualIncome, monthlyCosts})
            .then((result) => onSubmit(result))
    }

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
                <AssessmentForm onSubmit={submitForm}>
                </AssessmentForm>
            </Card>
        </Container>
    )
}

FinancialHealthAssessment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
