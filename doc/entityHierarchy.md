# Entity Hierarchy
The [entity](entity.md) hierarchy contains the structure of the process and its participants.  
Note, that we do not impose a strict tree structure for the entity hierarchy: an entity may have multiple parent entities. It is also possible for hierarchy levels to contain entities of different [types](entityType.md). However, we restrict the entities' parent-child relationships based on their types:
1. Instances of company, process and product entity types are roots to their own sub-hierarchies
2. Instances of component and data source entity types can not be part of multiple sub-hierarchies
3. Instances of data source entity types are not allowed to have children
4. Cycles are not allowed to occur

## Example(s)
* **Production**:
  An simplified ATM consists of a `Safe` and `Head` component entities.  
  The `Safe` entity contains several `Cassette` component entities. The `Cassette` entities contain several `Conveyor Belt` component entities.  
  The `Head` entity contains several `Conveyor Belt` component entities. Additionally, it contains a `Output Tray` component entity.
  Each `Conveyor Belt` entity is parent to two `Light Sensor` data source entities, which are used to monitor the note transport process. Note, that two `Conveyor Belt` entities share at least one `Light Sensor` entity.

## Related Elements
* [Entity](entity.md): hierarchically organized entities

## Implementation Details
|**Entity Hierarchy**|
|:--:|
|parent_id: int|
|child_id: int|