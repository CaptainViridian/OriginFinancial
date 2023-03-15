import Container from '../components/Container'
import TextWithStrong from '../components/TextWithStrong'
import Card from '../components/Card'
import originLogo from '../assets/logo.svg'
import {styled} from '@mui/system'
import PageTitle from '../components/PageTitle'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import {FinancialHealthClassification, UserFriendlyHealthClassificationNames} from '../constants'
import Progress from '../components/AssessmentResult/Progress'

const Icon = styled('img')({})

const resultText = (component) =>
    styled(component)({
        margin: 0,
    })

const ResultTitle = resultText('h1')
const ResultSubtitle = resultText('h4')

const ResultContainer = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
}))

const ResultTextContainer = styled('div')({
    textAlign: 'center',
})

const {LOW, HEALTHY, MEDIUM} = FinancialHealthClassification

const resultMessages = {
    [HEALTHY]: 'Congratulations!',
    [MEDIUM]: 'There is room for improvement.',
    [LOW]: 'Caution!',
}

const ReturnButton = styled(Button)(({theme}) => ({
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: 2,
}))

function AssessmentResult({assessmentResult, onClickReturn}) {
    return (
        <Container>
            <PageTitle sx={{typography: 'h2'}}>
                <TextWithStrong
                    weak={'Here\'s your'}
                    strong={'financial wellness score:'}
                />
            </PageTitle>

            <Card>
                <ResultContainer>
                    <Icon src={originLogo} alt='Origin Financial logo'/>
                    <Progress assessmentResult={assessmentResult}/>
                    <ResultTextContainer>
                        <ResultTitle sx={{typography: 'h1'}}>
                            {resultMessages[assessmentResult]}
                        </ResultTitle>
                        <ResultSubtitle sx={{typography: 'h4Result'}}>
                            <TextWithStrong
                                weak='Your financial wellness score is'
                                strong={`${UserFriendlyHealthClassificationNames[assessmentResult]}.`}
                            />
                        </ResultSubtitle>
                    </ResultTextContainer>
                    <ReturnButton onClick={onClickReturn}>Return</ReturnButton>
                </ResultContainer>
            </Card>
        </Container>
    )
}

export default AssessmentResult

AssessmentResult.propTypes = {
    assessmentResult: PropTypes.string.isRequired,
    onClickReturn: PropTypes.func.isRequired,
}