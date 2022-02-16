# Limit
Limits represent acceptable value ranges for [KPI](kpi.md) it is assigned to. A limit consists of an expected value, at least one bound, and a [type](limitType.md).  
A violated bound indicates an [issue](issue.md), that interferes with the behavior of the [entity](entity.md) referenced by the limit's KPI.  
Multiple limits of a single type can be assigned to a single KPI. During evaluation, a KPI's currently valid limits are selected using the [limit's influences](limitInfluences.md)