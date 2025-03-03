<script lang="ts">

    import CascadeOptionsSelect from "@ticatec/uniface-element/CascadeOptionsSelect";
    import utils from "$lib/utils";

    export let criteria;
    export let field: string;
    export let variant: 'outlined' | 'filled';

    export let props: any;

    const acceptAttrs = ['menu$height', 'style', 'nodes', 'keyField', 'textField', 'abbrField', 'emptyText', 'onSelect'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);

</script>

<CascadeOptionsSelect bind:value={criteria[field]} {variant} {...attrs}/>