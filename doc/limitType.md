# Limit Type
Limit types provide a way to describe the kind of incidents detected by [limits](limit.md).

## Example(s)
The limit type `WARNING` indicates that the limit indicates impending problems but does not require immediate action.  
The limit type `ERROR`, however, indicates that the limit detects incidents that require immediate resolution.  

## Related Elements
* [Limit](limit.md): instances of the limit type

## Implementation Details
|**Limit Type**|
|:--:|
|id: int|
|name: str|
|company_id: str|

Customers can freely define their own limit types.
