import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'
import {ThemeProvider} from '@mui/system'
import {theme} from './theme'

it('Renders Header and Footer correctly', () => {
    render(<ThemeProvider theme={theme}><App /></ThemeProvider>)

    const header = screen.getByAltText(/origin written logo/i)
    expect(header).toBeInTheDocument()

    const footer = screen.getByText(/personal data/i)
    expect(footer).toBeInTheDocument()
})

it('Renders the FinancialHealthAssessment first', function () {
    render(<ThemeProvider theme={theme}><App /></ThemeProvider>)

    const pageTitle = screen.getByText(/find out your/i)
    expect(pageTitle).toBeInTheDocument()
})

describe('Form', function () {
    it('should render and have required fields', () => {
        render(<ThemeProvider theme={theme}><App /></ThemeProvider>)

        const incomeField = screen.getByLabelText(/annual income/i)
        const monthlyCosts = screen.getByLabelText(/monthly costs/i)
        const submitButton = screen.getByText(/continue/i)

        expect(incomeField).toBeInTheDocument()
        expect(incomeField).toBeRequired()


        expect(monthlyCosts).toBeInTheDocument()
        expect(monthlyCosts).toBeRequired()

        expect(submitButton).toBeInTheDocument()

    })

    it('should validate correctly', function () {
        const alertMock = jest.spyOn(window,'alert').mockImplementation()

        render(<ThemeProvider theme={theme}><App /></ThemeProvider>)

        const incomeField = screen.getByLabelText(/annual income/i)
        const monthlyCosts = screen.getByLabelText(/monthly costs/i)
        const submitButton = screen.getByText(/continue/i)

        fireEvent.change(incomeField, {
            target: {
                value: -1,
            },
        })

        expect(incomeField).toHaveValue(-1)
        fireEvent.click(submitButton)

        fireEvent.change(incomeField, {
            target: {
                value: 100,
            },
        })
        fireEvent.click(submitButton)

        fireEvent.change(monthlyCosts, {
            target: {
                value: 100,
            },
        })
        fireEvent.click(submitButton)

        expect(alertMock).toHaveBeenCalledTimes(2)
    })

    it('should call the API correctly', function () {
        const fetchMock = jest.spyOn(global,'fetch')

        render(<ThemeProvider theme={theme}><App /></ThemeProvider>)

        const incomeField = screen.getByLabelText(/annual income/i)
        const monthlyCosts = screen.getByLabelText(/monthly costs/i)
        const submitButton = screen.getByText(/continue/i)

        fireEvent.change(incomeField, {
            target: {
                value: -1,
            },
        })
        fireEvent.change(incomeField, {
            target: {
                value: 100,
            },
        })
        fireEvent.change(monthlyCosts, {
            target: {
                value: 100,
            },
        })

        fireEvent.click(submitButton)
        expect(fetchMock).toHaveBeenCalledTimes(1)
        expect(fetchMock).toHaveBeenNthCalledWith(
            1,
            'http://localhost:8080/evaluateFinancialHealth',
            {
                body: '{"annualIncome":"100","monthlyCosts":"100"}',
                method: 'POST',
            },
        )
    })
})
