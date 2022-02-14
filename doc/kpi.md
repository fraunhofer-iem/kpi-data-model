# KPI
KPIs serve three purposes:
1. **Representation**: KPIs represent a reference value correlating with the performance of the process as a whole or a process participant. Therefore, KPIs relate to the [entity](entity.md) corresponding to the target of the reference value.
2. **Calculation**: KPIs combine data from other KPIs and entities in order to calculate their reference values. Note, that KPIs can only use [calculation elements](calculationElement.md) that are positioned lower within the [KPI](kpiHierarchy.md) or [entity](entityHierarchy.md) hierarchies. Otherwise, there is a risk of introducing circular dependencies.  
[Rules](rule.md) contain the actual calculation logic.
3. **Evaluation**: KPIs assess the performance of their referenced entity and point out potential problems in accordance to the [limits](limit.md) assigned to them.