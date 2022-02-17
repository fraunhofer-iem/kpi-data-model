# Overview
This repository is used to define the fundamental data model to define a KPI system for KPI-based Process Management.
# KPI-based Process Management
The basic idea of KPI-based Process Management is that all activities within a company can be represented and managed in the form of interrelated processes (compare ISO 9000 series). For this purpose KPI-based Process Management defines two fundamental elements: A domain-independent data model and the procedure for identification and specification of KPIs.

## Data Model
The data model is the basis for KPI-based Process Management. For this purpose, it represents all activities within a company as interrelated processes.

Within the data model, we focus on two different aspects of a company: 
* The Process Environment represents the company in the form of interrelated processes and their process participants. 
* The Process Management represents company goals, which combine assessment criteria with tolerance areas for the managed processes.

A detailed description of the individual components can be found [here](https://github.com/fraunhofer-iem/kpi-data-model/tree/main/doc). Additionally, a graphical representation of the individual components and their interrelationships within the data model can be found [here](https://fraunhofer-iem.github.io/kpi-data-model/).
### Process Environment
In the Process Environment, we define a hierarchical arrangement of Entities. An Entity represents any process participant. This can be organizational or physical parts of the company, such as, but not limited to, company, site, process, department, product, or data source. Company-specific hierarchy levels can contain Entities of different kinds, where leaf entities usually represent data sources. Note that we do not impose a strict tree structure for the Entity hierarchy: An Entity may have multiple parent Entities. Furthermore, we compile additional information on Entities useful for automated process assessment: Environmental Influences influence the behavior of an associated Entity. Note that the behavior of Entities, however, is not modeled directly, but an Entity may provide Features that realize its behavior. A Problem can interfere with an Entity of any hierarchical level and, thus, may impact an associated Feature of the Entity. Each Problem is composed of three elements: An Issue, a Cause, and a Solution. These elements did not change compared to our previous model.
### Process Management
In the Process Management, we define a hierarchical arrangement of KPIs, analogous to the Entity hierarchy defined in the Process Environment. A KPI represents an Entity-specific company goal. Therefore, the KPI hierarchy mirrors the entity hierarchy, with KPIs relating to the Entity assigned to the company goal. A KPI aggregates data provided by Entities (mostly data sources) and/or subordinate KPIs and may assess individual Features of an associated Entity. Note that the hierarchical design of our data model allows KPIs of the same type to be aggregated across multiple levels. A KPI assesses its respective company goal using Limits. Limits represent acceptable value ranges for the underlying company goal. They consist of an Expected Value, at least one Bound, and a Category such as WARN or ERROR. A violated Bound of a Limit indicates a Problem, that interferes with the behavior of the Entity. Remember that Environmental Influences change the expected behavior of the associated Entity and, thus, the acceptable value range of the company goal. Therefore, a KPI can be associated with multiple Limits that depend on Environmental Influences.

## Procedure for Identification and Specification of KPIs
TBD
