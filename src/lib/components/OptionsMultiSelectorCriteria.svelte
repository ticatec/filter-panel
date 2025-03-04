<script lang="ts">

    import OptionsMultiSelect from "@ticatec/uniface-element/OptionsMultiSelect";
    import utils from "../utils";

    export let criteria;
    export let field: string;
    export let variant: 'outlined' | 'filled';

    export let props: any;

    const acceptAttrs = ['menu$height', 'style', 'options', 'keyField', 'textField', 'emptyText', 'tagColor', 'tagVariant'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);

</script>

<OptionsMultiSelect bind:value={criteria[field]} {variant} {...attrs}/>