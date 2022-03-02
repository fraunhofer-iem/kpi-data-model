# Rule
The KPI calculation is split into two phases:
1. interpretation
2. combination

In the interpretation phase, the data provided to the KPI via its [calculation elements](calculationElement.md) is prepared for the remaining KPI calculation.  
In the combination phase, the prepared data is reduced to a single value. This value is evaluated against the KPI's [limits](limit.md).

KPIs define one rule for each phase. Rules specify calculation instructions using an expression language such as [Google's CEL](https://github.com/google/cel-spec/).

## Example(s)
* **Production**:  
  Within ATMs, the note transport path is divided into segments, observed by light sensors detecting passing notes. For each segment, the length of the segment and the travel speed of notes is known. Thus, we can derive an expected travel time for notes along a segment.  
  The KPI `NoteTransportTime`<sub>`L1, L2`</sub> (see [KPI](kpi.md)) calculates the average note travel time along the `L1, L2` segment. Therefore, it obtains all data collected by light sensors `L1` and `L2`. 
  In the interpretation phase, the light sensors' data is filtered for the `SENSOR_COVERED` event and sorted by time. For each note `N`, it's travel time is calculated as the time difference between `SENSOR_COVERED` events triggered by `N` at `L1` and subsequently at `L2`. The individual travel times are collected in a list.
  In the combination phase, the list of individual travel times is reduced to it's average.

## Related Elements
* [KPI](kpi.md): KPI this rule is assigned to
* [Rule Type](ruleType.md): object, that distinguishes interpretation and combination rules

## Implementation Details
|**Rule**|
|:----:|
|id: int|
|name: str|
|description: str|
|rule: str|
|rule_type_id: int|
|kpi_id: int|
|company_id: str|