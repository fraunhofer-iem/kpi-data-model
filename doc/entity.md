# Entity
An entity represents any organizational or physical part of the company, such as, but not limited to, company, site, process, department, product, or data source.  
In order to be able to perform a detailed analysis, we collect additional information on entities:
1. Entities may be subject to (environmental) [influences](influence.md) that change their expected behavior
2. Entities may be assigned a set of [problems](problem.md), that either occured previously or are surmised to be possible.
3. Entites are [hierarchically](entityHierarchy.md) organized mirroring the company and product structure.

## Example(s)
* **Production**:
  An ATM is composed of two separate units: the safe and the head. Notes are transported from cassettes in the safe to the output tray in the head using conveyor belts. The note transport is observed using light sensors.  
  All of these parts mentioned above is represented by its own entity within the data model.

## Related Elements
* [Entity Type](entityType.md): object, that distinguishes i.e. data sources from products
* [Entity Hierarchy](entityHierarchy.md): information on the hierarchical structure of the entity
* [Influence](influence.md): environmental influence that change the entity's expected behavior
* [Problem](problem.md): collection of [issues](issue.md), [causes](cause.md), and [solutions](solution.md)
* [Feature](feature.md): collection of features the entity helps to realize

## Implementation Details
|**Entity**|
|:----:|
|id: int|
|name: str|
|datasource_identifier: str|
|entity_type_id: int|
|company_id: str|

The attribute `datasource_identifier` is only set on data sources and helps identify the entity within the test data (during analysis).
