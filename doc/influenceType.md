# Influence Type
An influence type is a description of an influence that may affect [entities](entity.md) of a specific kind.  
We support categorical and range influences. A categorical influence has a text value, i.e. a named location. A range influence has a value consisting of a lower and upper limit, i.e. a range of acceptable temperatures.

## Example(s)
* **Production**:
  Humidity, Altitude, Temperature

## Related Elements
* [Influence](influence.md): entity-specific instances of this influence type

## Implementation Details
|**Issue Type**|
|:--:|
|id: int|
|name: str|
|description: str|
|value_type: str|
|company_id: str|