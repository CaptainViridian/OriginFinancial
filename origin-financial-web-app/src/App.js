import Header from './components/Header'
import Footer from './components/Footer'
import {styled} from '@mui/system'
import FinancialHealthAssessment from './pages/FinancialHealthAssessment'

import '@fontsource/work-sans'
import '@fontsource/rubik'
import AssessmentResult from './pages/AssessmentResult'
import {useState} from 'react'

const AppRoot = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
    },
}))

function App() {
    const [assessmentResult, setAssessmentResult] = useState(null)

    return (
        <AppRoot>
            <Header/>
            {!assessmentResult
                ? <FinancialHealthAssessment
                    onSubmit={setAssessmentResult}
                />
                : <AssessmentResult
                    onClickReturn={() => setAssessmentResult(null)}
                    assessmentResult={assessmentResult}/>
            }
            <Footer/>
        </AppRoot>
    )
}

export default App
