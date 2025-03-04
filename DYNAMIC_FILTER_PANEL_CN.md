# DynamicFilterPanel

`DynamicFilterPanel` 是一个 Svelte 组件，基于 `FilterPanel`，用于动态生成筛选面板。它能够根据提供的字段配置（`fields`）和条件数据（`criteria`）渲染基本和高级筛选界面，支持灵活的组件化和样式定制。

## 功能特性

- **动态字段渲染**：根据 `fields` 配置动态生成筛选字段。
- **基本与高级筛选**：支持基本筛选和高级筛选面板，自动识别高级字段。
- **组件化支持**：通过 `CriteriaComponents` 管理器动态加载字段组件，未注册类型默认使用 `UnknownTypeCriteria`。
- **事件处理**：支持重置和搜索操作的事件绑定。
- **样式定制**：支持基本面板和高级面板的自定义样式，以及字段外观变体（`outlined` 或 `filled`）。

## 安装

确保项目中已安装以下依赖：
- `@ticatec/uniface-element`：提供 `CriteriaField` 和类型支持（如 `MouseClickHandler` 和 `ButtonActions`）。
应用加载时需要调用`registerComponents`来绑定组件类型，扩展可以通过`register`来注入新的查询组件类型
```shell
npm i @ticatec/filter-panel
```

## 使用示例

```sveltehtml
<script lang="ts">

    import { type MetaCriteriaField} from "@ticatec/uniface-filter-panel/MetaCriteriaField";
    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import DynamicFilterPanel from "@ticatec/uniface-filter-panel/DynamicFilterPanel.svelte";
    
    const confirmHandler = () => {
        console.log('开始查询数据....')
    }

    let criteria: any = {};

    let panelActions: ButtonActions = [
        {
            label: '新增',
            type: 'third',
            handler: () => {
            }
        },
        {
            label: '导出数据',
            icon: "uniface-icon-download",
            type: 'forth',
            handler: () => {
            }
        },
        {
            label: '批量导入',
            type: 'forth',
            icon: "uniface-icon-upload",
            handler: () => {
            }
        }
    ]
    const genderList: Array<any> = [
        {code: 'M', text: '男性'},
        {code: 'F', text: '女性'}
    ]

    const statusList = [
        {code: 'P', text: '待提交'},
        {code: 'S', text: '审批中'},
        {code: 'K', text: '审批完成'}
    ]

    let fields: Array<MetaCriteriaField> = [
        {
            type: 'text-editor',
            label: '姓名',
            size: 'x15',
            attrs: {
                field: "name"
            }
        },
        {
            type: 'options-selector',
            label: '性别',
            size: 'x15',
            attrs: {
                field: "gender"
            },
            props: {
                emptyText: "所有",
                options: genderList
            }
        },
        {
            type: 'options-multi-selector',
            label: '状态',
            size: 'x40',
            isAdvanced: false,
            attrs: {
                field: "status"
            },
            props: {
                emptyText: "所有",
                options: statusList
            }
        },
        {
            type: 'text-edit',
            label: '无效类型',
            size: 'x15',
            attrs: {
                field: "class"
            }
        }
    ];
    $: console.log("当前的查询条件", JSON.stringify(criteria))


</script>

<div style="width: 100%; padding: 12px; box-sizing: border-box; background-color: #F8FAFC">
    <DynamicFilterPanel bind:criteria resetClickHandler={()=>{}} searchClickHandler={()=>{}} variant="outlined" actions={panelActions}
                        {fields}/>
</div>


```

## Props

| 属性名                   | 类型                        | 默认值     | 描述                                                                 |
|--------------------------|-----------------------------|------------|----------------------------------------------------------------------|
| `criteria`               | `any`                       | `{}`       | 筛选条件数据，双向绑定以存储用户输入                                 |
| `fields`                 | `Array<MetaCriteriaField>`  | `[]`       | 字段配置数组，定义筛选字段的属性和行为                               |
| `resetClickHandler`      | `MouseClickHandler`         | -          | 重置按钮的点击事件处理函数                                           |
| `searchClickHandler`     | `MouseClickHandler`         | -          | 搜索按钮的点击事件处理函数                                           |
| `actions`                | `ButtonActions`             | `[]`       | 自定义按钮操作列表，来自 `@ticatec/uniface-element/ActionBar`        |
| `variant`                | `'outlined' \| 'filled'`    | `'outlined'`| 字段组件的外观样式，可选 `outlined` 或 `filled`                     |
| `advancedCriteriaTitle`  | `string`                    | `'More'`   | 高级筛选面板的标题                                                  |
| `style`                  | `string`                    | `''`       | 基本筛选面板的自定义样式                                            |
| `advStyle`               | `string`                    | `''`       | 高级筛选面板的自定义样式                                            |

### `MetaCriteriaField` 类型说明

| 属性名       | 类型               | 描述                                                    |
|--------------|--------------------|-------------------------------------------------------|
| `label`      | `string`           | 字段标签                                                  |
| `type`       | `string`           | 字段类型，用于确定渲染组件                                         |
| `size`       | `string`           | 字段大小 '','x15','x20','x25','x30','x35','x40' | 
| `isAdvanced` | `boolean`          | 是否为高级筛选字段                                             |
| `attrs`      | `object`           | 传递给字段组件的额外属性                                          |
| `props`      | `object`           | 传递给字段组件的额外 props                                      |

## 行为说明

- **字段渲染**：根据 `fields` 数组动态渲染筛选字段，非高级字段（`!field.isAdvanced`）显示在基本面板，高级字段显示在高级面板。
- **组件选择**：字段组件通过 `CriteriaComponents` 管理器根据 `type` 获取，若未注册则使用 `UnknownTypeCriteria`。
- **高级面板触发**：当 `fields` 中存在 `isAdvanced: true` 的字段时，自动启用高级筛选面板。
- **响应式更新**：当 `fields` 变化时，自动重新计算字段列表和高级面板状态。

## 组件类型

| 类型                      | 渲染组件                      | 可绑定的key                                                   | 属性                                                                                                                     |
|-------------------------|---------------------------|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `text-editor`              | 文本输入框 (TextEditor)        | field                  | 'style', 'placeholder'                                                                                                 |
| `date-range`                | 日期范围 (DateRange)          | fromField / toField       | 'style', 'format', 'min', 'max'                                                                                        |
| `options-selector`     | 下拉单选  (OptionsSelect)     | field              | 'menu$height', 'style', 'options', 'keyField', 'textField', 'emptyText'                                                |
| `options-multi-selector`    | 下拉多选 (OptionsMultiSelect) | field        | 'menu$height', 'style', 'options', 'keyField', 'textField', 'emptyText', 'tagColor', 'tagVariant'                      |
| `number-range`               | 数值范围 (NumberRange)        | minField / maxField | 'style', 'min', 'max', 'allowNegative'                                                                                 |
| `date-picker`               | 日期选择 (DatePicker)         | field           | 'style', 'format', 'min', 'max'                                                                                        |
| `number-editor` | 数字输入 (NumberEditor)       | field                | 'style', 'placeholder', 'precision', 'allowNegative', 'max', 'min'                                                     |
| `cascade-selector`                 | 级联选择 (CascadeOptionsSelect)      | field      | 'menu$height', 'style', 'nodes', 'keyField', 'textField', 'abbrField', 'emptyText' |

绑定的key通过attrs定义，其他属性可以通过props来定义。

## 注意事项

- **字段配置**：确保 `fields` 数组中的每个对象至少包含 `label` 和 `type`，以正确渲染字段。
- **组件注册**：若需自定义字段组件，应在 `CriteriaComponents` 中注册对应类型，否则使用默认组件。
- **事件处理**：未定义 `resetClickHandler` 或 `searchClickHandler` 可能导致功能不可用。
- **样式隔离**：自定义样式通过 `style` 和 `advStyle` 传入，遵循 Svelte 的样式隔离规则。