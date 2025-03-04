# Uniface Filter Panel

[中文文档](./README_CN.md)

This filter panel component includes three types of panels, including the **Filter Panel** and the **Dynamic Combination Filter Panel**.  
It is suitable for various scenarios where users need to input query conditions. Below are some specific use cases:

## Use Cases
1. **Data Table Filtering**:  
   In table pages displaying large amounts of data, users can use the filter panel to quickly locate the desired data.  
   For example, in an employee information table, users can filter by name, department, or position to quickly find the target employee.

2. **List Page Filtering**:  
   In list pages displaying products, articles, tasks, etc., users can use the filter panel to narrow down their search scope.  
   For example, in an e-commerce website’s product list, users can filter by price range, brand, or color to find their preferred items.

3. **Advanced Search Page Filtering**:  
   On search result pages, users can use the filter panel to further refine their search conditions.  
   For example, on a news search website, users can filter by time range, news source, or keywords to obtain more precise search results.

4. **Report Filtering**:  
   In data report display pages, users can use the filter panel to dynamically adjust the report data.  
   For example, on a sales report page, users can filter by time period, region, or product category to view sales data under specific conditions.

5. **Admin Dashboard Data Filtering**:  
   In various data management pages of an admin dashboard, administrators can use the filter panel to quickly search and manage data.  
   For example, on a user management page, administrators can filter by username, registration date, or user status to manage specific users.

The component’s features make it particularly useful in the following situations:

- **Multiple Filter Conditions**: The component supports custom filter conditions, meeting complex data filtering needs.
- **Reset and Search Operations**: Built-in reset and search buttons make common operations convenient for users.
- **Advanced Filtering**: The component provides an advanced filtering button to extend more complex filtering logic.
- **Custom Operations**: The component supports adding custom action buttons to meet specific business requirements.
- **Unified Filter Panel Style**: The component offers a consistent style, making it easy to use across multiple pages.

By using this filter panel component, you can improve the operational efficiency and user experience in various data display and management scenarios.

## Panel Types

### Filter Panel `FilterPanel`
Defines the content of the filter panel through slots to implement retrieval and query functions. For details, refer to [Filter Panel](./FILTER_PANEL.md).

### Dynamic Filter Panel `DynamicFilterPanel`
Dynamically renders a filter panel by defining a list of fields, implementing retrieval and query functions. For details, refer to [Dynamic Filter Panel](./DYNAMIC_FILTER_PANEL.md).

## Installation
```shell
npm install @ticatec/uniface-filter-panel
```

## Usage
This component supports I18N multi-language functionality, with the default language being English. You can dynamically switch to the target language, but you must first load the corresponding language pack. The i18n keys included in this component are:

|Key	|Description	|Default|
|-----|------|------|
|uniface.filter_panel.btnReset	|Reset button	|Reset|
|uniface.filter_panel.btnSearch	|Search button	|Search|
|uniface.filter_panel.btnMoreCriteria	|More criteria text button	|More Criteria|

### Example

```sveltehtml
import "@ticatec/uniface-filter-panel/FilterPanel" //Import FilterPanel
import "@ticatec/uniface-filter-panel/DynamicFilterPanel" //Import DynamicFilterPanel
```


### Related Documents

* [Uniface Element](https://github.com/henryfeng/uniface-element)


## Dependencies

* [Uniface Element](https://github.com/henryfeng/uniface-element)

## Contributions

Issues and pull requests are welcome.

## Copyright

Copyright © 2023 Ticatec. All rights reserved.

This library is released under the MIT License. For more details about the license, please refer to the [LICENSE](LICENSE) file.

## Contact

huili.f@gmail.com

https://github.com/henryfeng/filter-panel