# FilterPanel

`FilterPanel` is a Svelte component designed to implement a basic filter panel with support for extended advanced filtering capabilities. It provides a flexible and customizable filtering interface suitable for scenarios requiring dynamic data filtering.

## Features

-   **Basic Filter Panel**: Provides simple filtering functionality through `BasicFilterPanel`.
-   **Advanced Filter Panel**: Supports more complex filtering conditions through `AdvancedFilterPanel`, which can be displayed as a full-screen overlay.
-   **Slot Support**: Allows users to customize the content of basic and advanced filter panels.
-   **Event Handling**: Supports reset, search, and advanced filtering operations.
-   **Style Customization**: Supports custom styles for basic and advanced panels.
-   **Dynamic Switching**: Can show or hide the advanced filter panel as needed.

## Installation

Ensure the following dependencies are installed in your project:

-   `@ticatec/uniface-element`: Provides `FullScreenOverlay` and other UI component support.

```shell
npm i @ticatec/filter-panel
```
## Usage Example


```svelte
<script lang="ts">

    import FilterPanel from "@ticatec/filter-panel/FilterPanel.svelte";
    import CriteriaField from "@ticatec/uniface-element/CriteriaField";
    import TextEditor from "@ticatec/uniface-element/TextEditor";
    import DateRangeEditor from "@ticatec/uniface-element/DateRange";
    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import OptionsSelect from "@ticatec/uniface-element/OptionsSelect";
    import NumberRange from "@ticatec/uniface-element/NumberRange";

    const doSearch = () => {
        console.log('Starting data query....')
    }

    let criteria:any = {};

    let panelActions:ButtonActions = [
        {
            label: 'Add',
            type: 'third',
            handler: ()=> {}
        },
        {
            label: 'Export Data',
            icon: "uniface-icon-download",
            type: 'forth',
            handler: ()=> {}
        },
        {
            label: 'Batch Import',
            type: 'forth',
            icon: "uniface-icon-upload",
            handler: ()=> {}
        }
    ]

    const genderList:Array<any> = [
        {code: 'M', text: 'Male'},
        {code: 'F', text: 'Female'}
    ]

    $: console.log("Current query criteria", JSON.stringify(criteria))

</script>


<FilterPanel resetClickHandler={()=>{}} searchClickHandler={doSearch} actions={panelActions}>
    <CriteriaField label="Name" size="x20">
        <TextEditor bind:value={criteria.name} variant="outlined"/>
    </CriteriaField>
    <CriteriaField label="Gender" size="x20">
        <OptionsSelect bind:value={criteria.gender} options={genderList} variant="outlined" emptyText="All"/>
    </CriteriaField>
    <CriteriaField label="Age" size="x15">
        <NumberRange bind:fromValue={criteria.minAge} bind:toValue={criteria.maxAge} variant="outlined"/>
    </CriteriaField>
    <svelte:fragment slot="advanced-panel">
        <CriteriaField label="Name" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="Gender" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="Enrollment Date" size="x25">
            <DateRangeEditor bind:fromValue={criteria.from} bind:toValue={criteria.to} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="Age" size="x15">
            <NumberRange bind:fromValue={criteria.minAge} bind:toValue={criteria.maxAge} variant="outlined"/>
        </CriteriaField>
    </svelte:fragment>
</FilterPanel>
```

## Props

| Prop Name | Type | Default | Description |
| --- | --- | --- | --- |
| resetClickHandler | MouseClickHandler | - | Click event handler for the reset button |
| searchClickHandler | MouseClickHandler | - | Click event handler for the search button |
| actions | ButtonActions | \[\] | List of custom button actions, from @ticatec/uniface-element/ActionBar |
| advancedCriteriaTitle | string | 'More' | Title of the advanced filter panel |
| style | string | '' | Custom styles for the basic filter panel |
| advStyle | string | '' | Custom styles for the advanced filter panel |
| hasAdvanced | boolean | true | Whether to enable advanced filtering |

## Slots

| Slot Name | Description |
| --- | --- |
| Default Slot | Content of the basic filter panel |
| advanced-panel | Content of the advanced filter panel |

## Behavior Description

-   **Advanced Filter Panel Trigger**: When `hasAdvanced` is true and the `advanced-panel` slot has content, an "Advanced Filter" button is displayed. Clicking it displays the advanced filter panel through `FullScreenOverlay`.
-   **Search and Close**: The "Confirm" button in the advanced filter panel triggers `searchClickHandler` and closes the panel; the "Close" button only closes the panel.
-   **Dynamic Rendering**: The advanced filter panel is rendered only when `showAdvanced` is true.

## Dependent Components

-   `BasicFilterPanel.svelte`: Implementation of the basic filter panel.
-   `AdvancedFilterPanel.svelte`: Implementation of the advanced filter panel.
-   `@ticatec/uniface-element/FullScreenOverlay`: Full-screen overlay component.
-   `@ticatec/uniface-element`: Provides `MouseClickHandler` and `ButtonActions` type definitions.

## Notes

-   If the `advanced-panel` slot content is not provided, the advanced filter button will not be displayed.
-   Ensure that event handlers (such as `resetClickHandler` and `searchClickHandler`) are correctly defined, otherwise, functionality may be unavailable.
-   Custom styles are passed through the `style` and `advStyle` properties, following Svelte's style isolation rules.