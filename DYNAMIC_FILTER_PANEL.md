# DynamicFilterPanel

`DynamicFilterPanel` is a Svelte component, based on `FilterPanel`, used to dynamically generate filter panels. It can render basic and advanced filter interfaces based on the provided field configurations (`fields`) and criteria data (`criteria`), supporting flexible componentization and style customization.

## Features

-   **Dynamic Field Rendering**: Dynamically generates filter fields based on the `fields` configuration.
-   **Basic and Advanced Filtering**: Supports basic and advanced filter panels, automatically recognizing advanced fields.
-   **Componentization Support**: Dynamically loads field components through the `CriteriaComponents` manager, using `UnknownTypeCriteria` for unregistered types by default.
-   **Event Handling**: Supports event binding for reset and search operations.
-   **Style Customization**: Supports custom styles for basic and advanced panels, as well as field appearance variants (`outlined` or `filled`).

## Installation

Ensure the following dependencies are installed in your project:

-   `@ticatec/uniface-element`: Provides `CriteriaField` and type support (such as `MouseClickHandler` and `ButtonActions`).
-   It is necessary to call `registerComponents` to bind component types when the application loads. Extensions can inject new query component types by `register`.

```shell
npm i @ticatec/filter-panel
```

## Usage Example

```sveltehtml
<script lang="ts">

    import { type MetaCriteriaField} from "@ticatec/uniface-filter-panel/MetaCriteriaField";
    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import DynamicFilterPanel from "@ticatec/uniface-filter-panel/DynamicFilterPanel.svelte";

    const confirmHandler = () => {
        console.log('Loading data....')
    }

    let criteria: any = {};

    let panelActions: ButtonActions = [
        {
            label: 'New',
            type: 'third',
            handler: () => {
            }
        },
        {
            label: 'Export',
            icon: "uniface-icon-download",
            type: 'forth',
            handler: () => {
            }
        },
        {
            label: 'Import',
            type: 'forth',
            icon: "uniface-icon-upload",
            handler: () => {
            }
        }
    ]
    const genderList: Array<any> = [
        {code: 'M', text: 'Male'},
        {code: 'F', text: 'Female'}
    ]

    const statusList = [
        {code: 'P', text: 'Pending'},
        {code: 'S', text: 'Processing'},
        {code: 'K', text: 'Completed'}
    ]

    let fields: Array<MetaCriteriaField> = [
        {
            type: 'text-editor',
            label: 'Name',
            size: 'x15',
            attrs: {
                field: "name"
            }
        },
        {
            type: 'options-selector',
            label: 'Gender',
            size: 'x15',
            attrs: {
                field: "gender"
            },
            props: {
                emptyText: "All",
                options: genderList
            }
        },
        {
            type: 'options-multi-selector',
            label: 'Status',
            size: 'x40',
            isAdvanced: false,
            attrs: {
                field: "status"
            },
            props: {
                emptyText: "All",
                options: statusList
            }
        },
        {
            type: 'text-edit',
            label: 'Invalid type',
            size: 'x15',
            attrs: {
                field: "class"
            }
        }
    ];
</script>

<div style="width: 100%; padding: 12px; box-sizing: border-box; background-color: #F8FAFC">
    <DynamicFilterPanel bind:criteria resetClickHandler={()=>{}} searchClickHandler={()=>{}} variant="outlined" actions={panelActions}
                        {fields}/>
</div>


```

## Props

| Prop Name | Type | Default | Description |
| --- | --- | --- | --- |
| `criteria` | `any` | `{}` | Filter criteria data, two-way binding to store user input |
| `fields` | `Array<MetaCriteriaField>` | `[]` | Field configuration array, defining the properties and behaviors of filter fields |
| `resetClickHandler` | `MouseClickHandler` | - | Click event handler for the reset button |
| `searchClickHandler` | `MouseClickHandler` | - | Click event handler for the search button |
| `actions` | `ButtonActions` | `[]` | List of custom button actions, from `@ticatec/uniface-element/ActionBar` |
| `variant` | `'outlined' \| 'filled'` | `'outlined'` | Appearance style of field components, optional `outlined` or `filled` |
| `advancedCriteriaTitle` | `string` | `'More'` | Title of the advanced filter panel |
| `style` | `string` | `''` | Custom styles for the basic filter panel |
| `advStyle` | `string` | `''` | Custom styles for the advanced filter panel |

### `MetaCriteriaField` Type Description

| Property Name | Type | Description |
| --- | --- | --- |
| `label` | `string` | Field label |
| `type` | `string` | Field type, used to determine the rendering component |
| `size` | `string` | Field size '','x15','x20','x25','x30','x35','x40' |
| `isAdvanced` | `boolean` | Whether it is an advanced filter field |
| `attrs` | `object` | Additional attributes passed to the field component |
| `props` | `object` | Additional props passed to the field component |

## Behavior Description

-   **Field Rendering**: Dynamically renders filter fields based on the `fields` array. Non-advanced fields (`!field.isAdvanced`) are displayed in the basic panel, and advanced fields are displayed in the advanced panel.
-   **Component Selection**: Field components are obtained through the `CriteriaComponents` manager based on `type`, and `UnknownTypeCriteria` is used if not registered.
-   **Advanced Panel Trigger**: When there are fields with `isAdvanced: true` in `fields`, the advanced filter panel is automatically enabled.
-   **Responsive Update**: When `fields` changes, the field list and advanced panel status are automatically recalculated.

## Component Types

| Type | Rendering Component | Bindable Keys | Attributes |
| --- | --- | --- | --- |
| `text-editor` | Text Input (TextEditor) | field | 'style', 'placeholder' |
| `date-range` | Date Range (DateRange) | fromField / toField | 'style', 'format', 'min', 'max' |
| `options-selector` | Dropdown Single Select (OptionsSelect) | field | 'menu$height', 'style', 'options', 'keyField', 'textField', 'emptyText' |
| `options-multi-selector` | Dropdown Multiple Select (OptionsMultiSelect) | field | 'menu$height', 'style', 'options', 'keyField', 'textField', 'emptyText', 'tagColor', 'tagVariant' |
| `number-range` | Number Range (NumberRange) | minField / maxField | 'style', 'min', 'max', 'allowNegative' |
| `date-picker` | Date Picker (DatePicker) | field | 'style', 'format', 'min', 'max' |
| `number-editor` | Number Input (NumberEditor) | field | 'style', 'placeholder', 'precision', 'allowNegative', 'max', 'min' |
| `cascade-selector` | Cascade Select (CascadeOptionsSelect) | field | 'menu$height', 'style', 'nodes', 'keyField', 'textField', 'abbrField', 'emptyText' |

The bound key is defined by attrs, and other attributes can be defined by props.

## Notes

-   **Field Configuration**: Ensure that each object in the `fields` array contains at least `label` and `type` to render fields correctly.
-   **Component Registration**: If you need to customize field components, you should register the corresponding type in `CriteriaComponents`, otherwise use the default component.
-   **Event Handling**: Undefined `resetClickHandler` or `searchClickHandler` may cause features to be unavailable.
-   **Style Isolation**: Custom styles are passed through `style` and `advStyle`, following Svelte's style isolation rules.