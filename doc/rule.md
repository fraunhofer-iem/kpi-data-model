# Rule
The KPI calculation is split into two phases:
1. interpretation
2. combination

In the interpretation phase, the data provided to the KPI via its [calculation elements](calculationElement.md) is prepared for the remaining KPI calculation.  
In the combination phase, the prepared data is reduced to a single value. This value is evaluated against the KPI's [limits](limit.md).

KPIs define one rule for each phase. Rules specify calculation instructions using an expression language such as [Google's CEL](https://github.com/google/cel-spec/).