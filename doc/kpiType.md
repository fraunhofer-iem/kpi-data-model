# KPI Type
A KPI type describes a reference value in general.  
For each [entity](entity.md), that is subject to this reference value, a [KPI](kpi.md) of this type is instantiated.  
The KPI type lists which [features](feature.md) are evaluated by its instances. Furthermore, KPI types are organized [hierarchically](kpiTypeHierarchy.md) placing restrictions on the KPI [hierarchy](kpiHierarchy.md).

## Example(s)
* **Production**: 
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  For each segment, a KPI of the type `NoteTransportTime` is instantiated. It monitors, among others, the feature `Note Transport`.  
  `NoteTransportTime` is a sub-type of `TransportQuality`. Therefore, `NoteTransportTime` instances can neither serve as parents of `TransportQuality` instances nor use `TransportQuality` instances as calculation elements.

## Related Elements
* [KPI](kpi.md): entity-specific instance of the KPI type
* [Feature](feature.md): list of features evaluated by instances of the KPI type
* [KPI type hierarchy](kpiTypeHierarchy.md): hierarchy information on KPI types

## Implementation Details
|**KPI Type**|
|:----:|
|id: int|
|name: str|
|description: str|
|company_id: str|

Currently, each customer has to define their own KPI types. In the future, we intend to provide 'public' KPI types that can be used by all customers.