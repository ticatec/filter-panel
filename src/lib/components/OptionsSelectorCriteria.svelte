<script lang="ts">

    import OptionsSelect from "@ticatec/uniface-element/OptionsSelect";
    import utils from "../utils";

    export let criteria;
    export let field: string;
    export let variant: 'outlined' | 'filled';

    export let props: any;

    const acceptAttrs = ['menu$height', 'style', 'options', 'keyField', 'textField', 'placeholder', 'emptyText'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);

</script>

<OptionsSelect bind:value={criteria[field]} {variant} {...attrs}/>