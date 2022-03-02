# KPI
KPIs serve three purposes:
1. **Representation**: KPIs represent a reference value correlating with the performance of the process as a whole or a process participant.
2. **Calculation**: KPIs combine data from other KPIs and entities in order to calculate their reference values. Note, that KPIs can only use [calculation elements](calculationElement.md) that are positioned lower within the [KPI](kpiHierarchy.md) or [entity](entityHierarchy.md) hierarchies. Otherwise, there is a risk of introducing circular dependencies.  
[Rules](rule.md) contain the actual calculation logic.
3. **Evaluation**: KPIs assess the performance of their referenced entity and point out potential problems in accordance to the [limits](limit.md) assigned to them.

## Example(s)
* **Production**:  
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  We define `NoteTransportTime`<sub>`L1, L2`</sub> as a KPI, that is assigned to entity `L1, L2`. `L1, L2` represents the transport path segment between light sensors `L1` and `L2` and is a parent of both in the entity hierarchy. Therefore, `NoteTransportTime`<sub>`L1, L2`</sub> can use light sensors `L1` and `L2` as its calculation elements. Its `rules` calculate the average travel time of notes along this segment. Its `limits` evaluate if the average travel time strays too far from the expected value.    

## Related Elements
* [KPI Type](kpiType.md): object, that contains general information on the KPI
* [Entity](entity.md): the process (participant) the KPI's reference value targets 
* [Calculation Element](calculationElement.md): entities or KPIs that serve as the KPI's data sources
* [Rule](rule.md): object, that contains the calculation logic specific to a single KPI
* [Limit](limit.md): object, that enables automated evaluation and feedback

## Implementation Details
|**KPI**|
|:----:|
|id: int|
|name: str|
|entity_id: int|
|kpi_type_id: int|
