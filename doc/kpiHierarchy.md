# KPI Hierarchy
Analogously to [entities](entityHierarchy.md), [KPIs](kpi.md) are also hierarchically organized. Since KPIs are entity-specific, the KPI hierarchy mirrors the entity hierarchy. However, a single entity may be assigned multiple KPIs. In this case, the entity-specific KPI hierarchy additionally has to follow the [KPI type hierarchy](kpiTypeHierarchy.md).

## Example(s)
* **Production**:
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  For each segment, a `NoteTransportTime`<sub>`<segment identifier>`</sub> KPI is defined mirroring the hierarchical entity structure. Additionally, `NoteTransportTime`<sub>`<multiple segment identifier>`</sub> KPIs may be defined at overarching component entities such as `Safe`. These KPIs aggregate the individual segments' KPIs to provide a quick overview of `NoteTransportTime` (KPIs can always be children of other KPIs of the same type).

## Related Elements
* [KPI](kpi.md): hierarchically organized KPIs.
* [KPI type hierarchy](kpiTypeHierarchy.md): additional restrictions on the KPI hierarchy

## Implementation Details
|**KPI Hierarchy**|
|:--:|
|parent_id: int|
|child_id: int|