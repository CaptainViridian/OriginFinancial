import java.math.BigDecimal

fun BigDecimal.subtractPercentage(percentage: BigDecimal) =
    this * (BigDecimal.ONE - percentage)