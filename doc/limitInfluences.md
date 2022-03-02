# Limit Influences
The acceptable value ranges of reference values depend on the environmental [influences](influence.md) an [entity](entity.md) is currently subject to.  
Therefore, we define a [limit](limit.md) for each possible constellation of influences assigned to the entity.  
Limit influences denote for which influence constellation the respective limit is valid. During evaluation, we ignore a limit if any of its limit influences did not manifest.

## Example(s)
* **Production**
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  Along the segment `L1, L2`, notes are expected to be transported in 1 second. However, if the ATM is operated at higher altitudes, the reduced air resistance results in quicker transportation times. Therefore, the KPI `NoteTransportTime`<sub>`L1, L2`</sub> (see [KPI](kpi.md)) is assigned two limits. One for operation at regular altitudes, another for operation at high altitudes.

## Related Elements
* [Limit](limit.md): depending limit
* [Influence](influence.md): required influence

## Implementation Details
|**Limit Influences**|
|:---:|
|limit_id: int|
|influence_id: id|
