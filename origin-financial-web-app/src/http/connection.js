const API_URL = 'http://localhost:8080'
const financialHealthEvaluationRoute = `${API_URL}/evaluateFinancialHealth`

export function postFinancialHealthEvaluation({
    annualIncome,
    monthlyCosts,
}) {
    return fetch(financialHealthEvaluationRoute, {
        method: 'POST',
        body: JSON.stringify({
            annualIncome,
            monthlyCosts,
        }),
    })
        .then(res => res.json())
        .then(({result}) => result.toUpperCase())
        .catch(console.log)
}