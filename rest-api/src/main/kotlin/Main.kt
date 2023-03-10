import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import http.controllers.FinancialHealthEvaluationController
import io.javalin.Javalin
import services.FinancialHealthEvaluationService

fun main() {
    val evaluationService = FinancialHealthEvaluationService()
    val objectMapper = jacksonObjectMapper()
    val controller = FinancialHealthEvaluationController(
        evaluationService,
        objectMapper
    )

    Javalin.create()
        .get("/") { ctx -> ctx.result("Hello World") }
        .post("/evaluateFinancialHealth", controller::post)
        .start(3000)
}