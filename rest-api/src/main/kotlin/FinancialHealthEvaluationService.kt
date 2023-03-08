import financialHealthEvaluation.FinancialHealthClassification
import financialHealthEvaluation.FinancialHealthClassification.*
import java.math.BigDecimal
import java.math.MathContext

val INCOME_TAX = BigDecimal("0.08")

class FinancialHealthEvaluationService {
    fun evaluate(annualIncome: BigDecimal, monthlyCosts: BigDecimal): FinancialHealthClassification {
        val annualNetIncome = annualIncome.subtractPercentage(INCOME_TAX)
        val annualCosts = monthlyCosts * BigDecimal(12)
        val costToNetIncomeRatio = annualCosts.divide(annualNetIncome, MathContext.DECIMAL32)

        return if (costToNetIncomeRatio <= BigDecimal(0.25))
            HEALTHY
        else if (costToNetIncomeRatio > BigDecimal(0.25) && costToNetIncomeRatio <= BigDecimal(0.75))
            MEDIUM
        else
            LOW

    }
}
