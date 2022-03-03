# Issue
In order to provide KPI-based feedback, we require information on issues that can potentially occur in an [entity](entity.md). For each entity, the customer can select its potential issues from a general list of known issues (see [issue type](issueType.md)). Similarly, the customer has to select the potential [causes](cause.md) of each issue.

## Example(s)
* **Production**:
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  A potential issue of the entity representing the transport path segment between light sensors `L1` and `L2` is a motor moving its conveyor belt(s) too slowly.

## Related Elements
* [Issue Type](issueType.md): general information on this issue
* [Cause](cause.md): potential causes of this issue
* [Entity](entity.md): entity this issue can occur in
* [Problem](problem.md): specific combination of issue, cause and solution detected by a violated limit

## Implementation Details
|**Issue**|
|:--:|
|id: int|
|issue_type_id: int|
|entity_id: int|