# Entity Type
An [entity](entity.md) type distinguishes the different kinds of entities from each other.

## Example(s)
* **Production**
  Entities representing a complete ATM are assigned the `ProductEntityType`.  
  Entities representing logical units within an ATM, are assigned the `ComponentEntityType`.  
  Entities representing physical units, that provide data, are assigned the `DataSourceEntityType`.  

## Related Elements
* [Entity](entity.md): instances of the entity type
* [Feature](feature.md): collection of features, that can be (partly) realized by instances of the entity type 

## Implementation Details
Each entity type is given its own model within the database:
|**Company Entity Type**|**Proess Entity Type**|**Product Entity Type**|**Component Entity Type**|**Data Source Entity Type**|
|:--:|:--:|:--:|:--:|:--:|
|id: int|id: int|id: int|id: int|id: int|
|name: str|name: str|name: str|name: str|name: str|
|description: str|description: str|description: str|description: str|description: str|
|||||unit: str|

Entities, however, reference an intermediate model:
|**Entity Type**|
|:--:|
|id: int|
|company_entity_type_id|
|process_entity_type_id|
|product_entity_type_id|
|component_entity_type_id|
|datasource_entity_type_id|

That way, the `Entity` model only needs to hold a reference to `Entity Type`, which is internally cast to the specific entity type.

