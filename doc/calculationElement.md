# Calculation Element
[KPIs](kpi.md) can use any combination of [entities](entity.md) and other KPIs during calculation.  
Calculation elements encapsulate a KPI or entity object in order to provide an easy way to reference these objects necessary for the KPI's calculation.

## Example(s)


## Related Elements
* [KPI](kpi.md): encapsulated KPI object
* [Entity](entity.md): encapsulated entity object

## Implementation Details
|**Calculation Element**|
|:--:|
|id: int|
|kind: str|
|entity_id: int|
|kpi_id: int|

The `kind` attribute is used to ensure validity of the calculation element object, i.e. to avoid setting both `entity_id` and `kpi_id` attributes at the same time. It can be set to either `KPI` or `ENTITY`.
