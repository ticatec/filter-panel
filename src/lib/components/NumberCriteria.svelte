<script lang="ts">

    import NumberEditor from "@ticatec/uniface-element/NumberEditor";
    import utils from "../utils";

    export let criteria;
    export let field: string;

    export let variant: 'outlined' | 'filled';

    const acceptAttrs = ['style', 'placeholder', 'precision', 'allowNegative', 'max', 'min'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);



</script>

<NumberEditor bind:value={criteria[field]} {variant} removable {...attrs}/>