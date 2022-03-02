# Limit
Limits represent acceptable value ranges for [KPI](kpi.md) it is assigned to. A limit consists of an expected value, at least one bound, and a [type](limitType.md).  
A violated bound indicates a [problem](limitProblem.md), that interferes with the behavior of the [entity](entity.md) referenced by the limit's KPI.  
Multiple limits of a single type can be assigned to a single KPI. During evaluation, a KPI's currently valid limits are selected using the [limit's influences](limitInfluences.md)

## Example(s)
* **Production**
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  Along the segment `L1, L2`, notes are expected to be transported in 1 second. However, deviations of 0.25 seconds are considered acceptable. Therefore, the KPI `NoteTransportTime`<sub>`L1, L2`</sub> (see [KPI](kpi.md)) is assigned a limit of type `ERROR` with an expected value of `1`, a lower bound of `0.75`, and an upper bound of `1.25`.

## Related Elements
* [KPI](kpi.md): KPI this limit is assigned to
* [Limit Type](limitType.md): object, that describes the kind of incident occuring if a limit bound is violated 
* [Limit Problem](limitProblem.md): set of problems, that may be the cause of the incident
* [Limit Influences](limitInfluences.md): selects, if limit is valid for the current execution context

## Implementation Details
|**Limit**|
|:---:|
|id: int|
|lower_bound: float|
|upper_bound: float|
|expected_value: float|
|limit_type_id: int|
|kpi_id: int|