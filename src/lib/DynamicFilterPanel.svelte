<script lang="ts">

    import type MetaCriteriaField from "./MetaCriteriaField";
    import CriteriaField from "@ticatec/uniface-element/CriteriaField";
    import type {MouseClickHandler} from "@ticatec/uniface-element";
    import CriteriaComponents from "./components/CriteriaComponents";
    import UnknownTypeCriteria from "$lib/components/UnknownTypeCriteria.svelte";
    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import FilterPanel from "$lib/FilterPanel.svelte";

    export let criteria: any = {};

    export let fields: Array<MetaCriteriaField> = [];

    export let resetClickHandler: MouseClickHandler;
    export let searchClickHandler: MouseClickHandler;

    export let actions: ButtonActions = [];
    export let variant: 'outlined' | 'filled' = 'outlined';

    export let advancedCriteriaTitle: string = 'More'

    let cmpMgr = CriteriaComponents.getInstance();

    let list: Array<MetaCriteriaField> = [];

    export let style: string = "";
    export let advStyle: string = "";

    let hasAdvanced: boolean = false;


    const getFieldComponent = (type: string) => {
        return cmpMgr.get(type) ?? UnknownTypeCriteria;
    }


    $: if (fields) {
        list = [];
        hasAdvanced = false;
        fields.forEach(field => {
            field.component = field.component ?? getFieldComponent(field.type);
            list.push(field);
            if (field.isAdvanced) {
                hasAdvanced = true
            }
        });
    }

</script>

<FilterPanel {style} {resetClickHandler} {searchClickHandler} {actions} {advancedCriteriaTitle} {advStyle} {hasAdvanced}>
    {#each list as field}
        {#if !field.isAdvanced}
            <CriteriaField label={field.label} size={field.size}>
                <svelte:component this={field.component} {...field.attrs} props={field.props} bind:criteria {variant}/>
            </CriteriaField>
        {/if}
    {/each}
    <svelte:fragment slot="advanced-panel">
        {#if hasAdvanced}
            {#each list as field}
                <CriteriaField label={field.label} size={field.size}>
                    <svelte:component this={field.component} {...field.attrs} props={field.props} bind:criteria {variant}/>
                </CriteriaField>
            {/each}
        {/if}
    </svelte:fragment>
</FilterPanel>