# Problem
Problems describe specific error situations, that may occur in the [entity](entity.md) referenced by the [KPI](kpi.md) the [limit](limit.md) is assigned to.  
In more detail, a limit problem shows, depending on the violated bound, which of the entity's [issues](issue.md) occurs. Additionally, it specifies one of the issue's [causes](cause.md) as explanation, and suggests one of the cause's [solutions](solution.md) to resolve the error.  
A limit can have multiple limit problems per bound. In this case, we require a prioritization in order to be able to list the problems in descending order of probability.

## Example(s)
* **Production**:
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  If the KPI `NoteTransportTime`<sub>`L1, L2`</sub> (see [KPI](kpi.md)) detects an error (see [limit](limit.md), the conveyor belt between `L1` and `L2` may move too slowly due to its motor not receiving enough power. The situation may be resolved by replacing the motor.

## Related Elements
* [Issue](issue.md)
* [Cause](cause.md)
* [Solution](solution.md)
* [Limit](limit.md)
* [Feature](feature.md)

## Implementation Details
|**Problem**|
|:----:|
|id: int|
|limit_id: int|
|issue_id: int|
|cause_id: int|
|solution_id: int|
|violated_bound: str|
|priority: int|



