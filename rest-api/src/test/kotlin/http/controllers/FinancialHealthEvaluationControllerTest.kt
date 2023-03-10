package http.controllers

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.MissingKotlinParameterException
import domain.FinancialHealthClassification
import io.javalin.http.Context
import io.javalin.http.HttpStatus
import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import io.mockk.junit5.MockKExtension
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import services.FinancialHealthEvaluationService
import java.math.BigDecimal.ZERO
import kotlin.reflect.KParameter

@ExtendWith(MockKExtension::class)
internal class FinancialHealthEvaluationControllerTest {

    @MockK
    lateinit var fakeFinancialHealthEvaluationService: FinancialHealthEvaluationService

    @MockK
    lateinit var fakeMapper: ObjectMapper

    @InjectMockKs
    lateinit var financialHealthEvaluationController: FinancialHealthEvaluationController

    @MockK//(relaxed = true)
    lateinit var mockCtx: Context

    private val testBody = "testBody"
    private val testEvaluationRequestBody = EvaluationRequestBody("0", "0")

    @BeforeEach
    fun setup() {
        every { mockCtx.body() } returns testBody
        every {
            fakeMapper.readValue(
                testBody,
                ofType<TypeReference<EvaluationRequestBody>>()
            )
        } returns testEvaluationRequestBody
        every { mockCtx.status(ofType<HttpStatus>()) } returns mockCtx
        every { mockCtx.result(ofType<String>()) } returns mockCtx
        every { mockCtx.json(ofType<String>()) } returns mockCtx
    }

    @Test
    fun `it responds with OK`() {
        val testHealthClassification = FinancialHealthClassification.HEALTHY
        every {
            fakeFinancialHealthEvaluationService.evaluate(ZERO, ZERO)
        } returns testHealthClassification

        val testEvaluationResponseBody = EvaluationResponseBody(testHealthClassification)
        val testResponseString = "testResponseBody"
        every { fakeMapper.writeValueAsString(testEvaluationResponseBody) } returns testResponseString

        financialHealthEvaluationController.post(mockCtx)

        verify { mockCtx.json(testResponseString) }
        verify { mockCtx.status(HttpStatus.OK) }
    }

    @Test
    fun `it responds with BAD REQUEST`() {
        val missingParameter = mockk<KParameter>()
        every { missingParameter.name } returns "testName"
        every {
            fakeFinancialHealthEvaluationService.evaluate(ZERO, ZERO)
        } throws MissingKotlinParameterException(missingParameter, null, msg = "Error")

        financialHealthEvaluationController.post(mockCtx)
        verify { mockCtx.status(HttpStatus.BAD_REQUEST) }
        verify { mockCtx.result("Missing required parameter: testName") }
    }
}