package http.controllers

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.MissingKotlinParameterException
import com.fasterxml.jackson.module.kotlin.readValue
import domain.FinancialHealthClassification
import io.javalin.http.Context
import io.javalin.http.HttpStatus
import services.FinancialHealthEvaluationService
import java.math.BigDecimal

class FinancialHealthEvaluationController(
    private val evaluationService: FinancialHealthEvaluationService,
    private val mapper: ObjectMapper,
) {
    fun post(ctx: Context) {
        try {
            val reqBody: EvaluationRequestBody = ctx.body().let(mapper::readValue)
            val (annualIncome, monthlyCosts) = reqBody.toBigDecimalPair()

            val evaluationResult = evaluationService.evaluate(annualIncome, monthlyCosts)

            EvaluationResponseBody(result = evaluationResult)
                .let(mapper::writeValueAsString)
                .let(ctx::json)
            ctx.status(HttpStatus.OK)
        } catch (e: MissingKotlinParameterException) {
            ctx.status(HttpStatus.BAD_REQUEST).result("Missing required parameter: ${e.parameter.name}")
        }
    }
}

data class EvaluationRequestBody(val annualIncome: String, val monthlyCosts: String) {
    fun toBigDecimalPair() = Pair(
        BigDecimal(annualIncome),
        BigDecimal(monthlyCosts)
    )
}

data class EvaluationResponseBody(val result: FinancialHealthClassification)