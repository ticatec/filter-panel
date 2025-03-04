# FilterPanel

`FilterPanel` 是一个 Svelte 组件，用于实现基本的筛选面板，并支持扩展的高级筛选功能。它提供了一个灵活的、可定制的筛选界面，适用于需要动态过滤数据的场景。

## 功能特性

- **基本筛选面板**：通过 `BasicFilterPanel` 提供简单的筛选功能。
- **高级筛选面板**：通过 `AdvancedFilterPanel` 支持更复杂的筛选条件，可通过全屏覆盖层展示。
- **插槽支持**：允许用户自定义基本和高级筛选面板的内容。
- **事件处理**：支持重置、搜索和高级筛选的操作。
- **样式定制**：支持自定义基本面板和高级面板的样式。
- **动态切换**：可以根据需要显示或隐藏高级筛选面板。

## 安装

确保项目中已安装以下依赖：

- `@ticatec/uniface-element`：提供 `FullScreenOverlay` 和其他 UI 组件支持。

```shell
npm i @ticatec/filter-panel
```

## 使用示例

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
        console.log('开始查询数据....')
    }

    let criteria:any = {};

    let panelActions:ButtonActions = [
        {
            label: '新增',
            type: 'third',
            handler: ()=> {}
        },
        {
            label: '导出数据',
            icon: "uniface-icon-download",
            type: 'forth',
            handler: ()=> {}
        },
        {
            label: '批量导入',
            type: 'forth',
            icon: "uniface-icon-upload",
            handler: ()=> {}
        }
    ]

    const genderList:Array<any> = [
        {code: 'M', text: '男性'},
        {code: 'F', text: '女性'}
    ]

    $: console.log("当前的查询条件", JSON.stringify(criteria))

</script>


<FilterPanel resetClickHandler={()=>{}} searchClickHandler={doSearch} actions={panelActions}>
    <CriteriaField label="姓名" size="x20">
        <TextEditor bind:value={criteria.name} variant="outlined"/>
    </CriteriaField>
    <CriteriaField label="性别" size="x20">
        <OptionsSelect bind:value={criteria.gender} options={genderList} variant="outlined" emptyText="所有"/>
    </CriteriaField>
    <CriteriaField label="年龄" size="x15">
        <NumberRange bind:fromValue={criteria.minAge} bind:toValue={criteria.maxAge} variant="outlined"/>
    </CriteriaField>
    <svelte:fragment slot="advanced-panel">
        <CriteriaField label="姓名" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="性别" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="入园日期" size="x25">
            <DateRangeEditor bind:fromValue={criteria.from} bind:toValue={criteria.to} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="年龄" size="x15">
            <NumberRange bind:fromValue={criteria.minAge} bind:toValue={criteria.maxAge} variant="outlined"/>
        </CriteriaField>
    </svelte:fragment>
</FilterPanel>
```

## Props

|属性名	|类型	|默认值	|描述| 
|-----|-----|------|----|
|resetClickHandler	|MouseClickHandler	|-	|重置按钮的点击事件处理函数|
|searchClickHandler	|MouseClickHandler	|-	|搜索按钮的点击事件处理函数|
|actions	|ButtonActions	|[]	|自定义按钮操作列表，来自 @ticatec/uniface-element/ActionBar|
|advancedCriteriaTitle	|string	|'More'	|高级筛选面板的标题|
|style	|string	|''	|基本筛选面板的自定义样式|
|advStyle	|string	|''	|高级筛选面板的自定义样式|
|hasAdvanced	|boolean	|true	|是否启用高级筛选功能|

## 插槽 (Slots)

|插槽名|	描述|
|----|-----|
|默认插槽	|基本筛选面板的内容|
|advanced-panel	|高级筛选面板的内容|

## 行为说明
* 高级筛选面板触发：当 hasAdvanced 为 true 且存在 advanced-panel 插槽内容时，会显示“高级筛选”按钮。点击后通过 FullScreenOverlay 显示高级筛选面板。
* 搜索与关闭：高级筛选面板中的“确认”按钮触发 searchClickHandler 并关闭面板；“关闭”按钮仅关闭面板。
* 动态渲染：高级筛选面板仅在 showAdvanced 为 true 时渲染。

## 依赖组件
* `BasicFilterPanel.svelte`：基本筛选面板的实现。
* `AdvancedFilterPanel.svelte`：高级筛选面板的实现。
* `@ticatec/uniface-element/FullScreenOverlay`：全屏覆盖层组件。
* `@ticatec/uniface-element`：提供 MouseClickHandler 和 ButtonActions 类型定义。

## 注意事项
* 如果没有提供 advanced-panel 插槽内容，高级筛选按钮将不会显示。
* 确保事件处理函数（如 resetClickHandler 和 searchClickHandler）已正确定义，否则可能导致功能不可用。
* 自定义样式通过 style 和 advStyle 属性传入，遵循 Svelte 的样式隔离规则。