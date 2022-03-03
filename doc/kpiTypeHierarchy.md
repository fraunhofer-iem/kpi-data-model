# KPI Type Hierarchy
KPI types are hierarchically organized in order to provide restrictions on the [KPI hierarchy](kpiHierarchy.md) of an [entity](entity.md) with multiple [KPIs](kpi.md) of different types.  
In general, KPIs can only be children of KPIs of the same type or of KPIs of a type that is a parent of their own type. Otherwise, situations may occur where parent KPIs are expected to be calculated before their children.

## Example(s)
* **Production**:
  The note transport of ATMs can be assessed with KPIs of the following types:
  - Note Transport
    - Power Consumption
      - Idle Current
      - Transport Current
    - Time Taken
      - Empty Clamp Transport Time
      - Full Clamp Transport Time

## Related Elements
* [KPI Type](kpiType): hierarchically organized KPI types
* [KPI Hierarchy](kpiHierarchy.md): restricted KPI hierarchy

## Implementation Details
|**KPI Type Hierarchy**|
|:--:|
|parent_id: int|
|child_id: int|