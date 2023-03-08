import financialHealthEvaluation.FinancialHealthClassification
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import java.math.BigDecimal
import kotlin.test.assertEquals

internal class FinancialHealthEvaluationServiceTest {
    private val financialHealthEvaluationService = FinancialHealthEvaluationService()

    @ParameterizedTest(name = "HEALTHY for {0} annualNetIncome and {1} monthlyCosts")
    @MethodSource("healthyData")
    fun `evaluate() should return HEALTHY`(annualNetIncome: BigDecimal, monthlyCosts: BigDecimal) {
        val result = financialHealthEvaluationService.evaluate(annualNetIncome, monthlyCosts)

        assertEquals(FinancialHealthClassification.HEALTHY, result)
    }

    @ParameterizedTest(name = "MEDIUM for {0} annualNetIncome and {1} monthlyCosts")
    @MethodSource("mediumData")
    fun `evaluate() should return MEDIUM`(annualNetIncome: BigDecimal, monthlyCosts: BigDecimal) {
        val result = financialHealthEvaluationService.evaluate(annualNetIncome, monthlyCosts)

        assertEquals(FinancialHealthClassification.MEDIUM, result)
    }

    @ParameterizedTest(name = "LOW for {0} annualNetIncome and {1} monthlyCosts")
    @MethodSource("lowData")
    fun `evaluate() should return LOW`(annualNetIncome: BigDecimal, monthlyCosts: BigDecimal) {
        val result = financialHealthEvaluationService.evaluate(annualNetIncome, monthlyCosts)

        assertEquals(FinancialHealthClassification.LOW, result)
    }

    companion object {
        @JvmStatic
        fun healthyData() = listOf(
            bigDecimalArgs("1000", "10"),
            bigDecimalArgs("55.01", "1"),
            bigDecimalArgs("55", "1.0"),
            bigDecimalArgs("55.01", "1.01"),
            bigDecimalArgs("1", "0"),
        )

        @JvmStatic
        fun mediumData() = listOf(
            bigDecimalArgs("1000", "30"),
            bigDecimalArgs("50.01", "1"),
            bigDecimalArgs("50", "1.0"),
            bigDecimalArgs("50.01", "1.01"),
            bigDecimalArgs("1", "0.05"),
        )

        @JvmStatic
        fun lowData() = listOf(
            bigDecimalArgs("1000", "80"),
            bigDecimalArgs("17.01", "1"),
            bigDecimalArgs("17", "1.0"),
            bigDecimalArgs("17.01", "1.01"),
            bigDecimalArgs("1", "0.075"),
        )

        private fun bigDecimalArgs(vararg params: String) =
            Arguments.of(*(params.map { BigDecimal(it) }.toTypedArray()))

    }

}