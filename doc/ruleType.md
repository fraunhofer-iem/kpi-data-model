# Rule Type
A [rule](rule.md) type denotes which phase of the KPI calculation the associated rule contains calculation instructions for.

## Example(s)
Rules can only be of type `INTERPRETATION` or `COMBINATION`, following the KPI calculation phases (see [rule](rule.md)).

## Related Elements
* [Rule](rule.md): instances of the rule type

## Implementation Details
|**Rule Type**|
|:--:|
|id: int|
|name: str|
|description: str|

Currently, rule types cannot be defined by customers.