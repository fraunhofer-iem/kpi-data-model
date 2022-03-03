# Influence
[Entities](entity.md) are subject to different influences during process execution. Such influences range from environmental influences, such as altitude or temperature, to organizational influences, such as team size.  
For each entity, the customer can select specific manifestations of influences from a general list of possible influences (see [influence type](influenceType.md)).  
We use this information to dynamically select a [KPI's](kpi.md) [limits](limit.md).

## Example(s)
* **Production**:
  ATMs may be operated in a humid and warm location, which requires different tolerances for mechanical parts. By specifying `humidity` and `temperature` influences for the affected entities, the respective KPIs can be assigned limits that are valid only for such environments.

* **Software Development**:
  Development teams vary in size. For a larger team, it is realistic to expect bugs to be fixed quicker than a smaller team would. By specifying the `team size` influence, fault correction KPIs can be assigned limits that grant smaller teams more time to fix a bug.

## Related Elements
* [Entity](entity.md): the entity affected by this influence
* [Influence Type](influenceType.md): general information on this influence
* [Limit Influences](limitInfluences.md): information on which limit is only valid with this influence present

## Implementation Details
|**Influence**|
|:---:|
|id: int|
|lower_bound: float|
|upper_bound: float|
|category: str|
|influence_type_id: int|

We support categorical and range influences. `category` is only allowed to be set, if the referenced influence type has its `value_type` set to `CATEGORICAL`.
