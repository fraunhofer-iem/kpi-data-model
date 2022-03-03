# Cause
In order to provide KPI-based feedback, we require information on what may cause an [issue](issue.md) to occur. For each issue, the customer can select its potential causes from a general list of known causes (see [cause type](causeType.md)). Similarly, the customer has to select the potential [solutions](cause.md) of each cause.

## Example(s)
* **Production**:
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  A potential issue of the entity representing the transport path segment between light sensors `L1` and `L2` is a motor moving its conveyor belt(s) too slowly. A potential cause may be the motor drawing not enough power.

## Related Elements
* [Cause Type](causeType.md): general information on this cause
* [Solution](solution.md): potential solutions of this cause
* [Problem](problem.md): specific combination of issue, cause and solution detected by a violated limit

## Implementation Details
|**Cause**|
|:--:|
|id: int|
|cause_type_id: int|
|issue_id: int|