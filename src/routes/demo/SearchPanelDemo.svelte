<script lang="ts">

    import FilterPanel from "$lib/FilterPanel.svelte";
    import CriteriaField from "@ticatec/uniface-element/CriteriaField";
    import TextEditor from "@ticatec/uniface-element/TextEditor";
    import DateRangeEditor from "@ticatec/uniface-element/DateRange";
    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import OptionsSelect from "@ticatec/uniface-element/OptionsSelect";
    import NumberRange from "@ticatec/uniface-element/NumberRange";

    let visible: boolean = false;

    const confirmHandler = () => {
        console.log('开始查询数据....')
        visible = false;
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

<div style="width: 100%; padding: 12px; box-sizing: border-box; background-color: #F8FAFC">
    <FilterPanel resetClickHandler={()=>{}} searchClickHandler={()=>{visible=true}} actions={panelActions}>
        <CriteriaField label="姓名" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="性别" size="x20">
            <OptionsSelect bind:value={criteria.gender} options={genderList} variant="outlined" emptyText="所有"/>
        </CriteriaField>
        <CriteriaField label="入园日期" size="x30">
            <DateRangeEditor bind:fromValue={criteria.from} bind:toValue={criteria.to} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="年龄" size="x15">
            <NumberRange bind:fromValue={criteria.minAge} bind:toValue={criteria.maxAge} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="姓名" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
        </CriteriaField>
        <CriteriaField label="姓名" size="x20">
            <TextEditor bind:value={criteria.name} variant="outlined"/>
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
            <CriteriaField label="姓名" size="x40">
                <TextEditor bind:value={criteria.name} variant="outlined"/>
            </CriteriaField>
            <CriteriaField label="姓名" size="x20">
                <TextEditor bind:value={criteria.name} variant="outlined"/>
            </CriteriaField>
            <CriteriaField label="姓名" size="x20">
                <TextEditor bind:value={criteria.name} variant="outlined"/>
            </CriteriaField>
        </svelte:fragment>

    </FilterPanel>
</div>

