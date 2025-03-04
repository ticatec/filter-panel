<script lang="ts">

    import NumberRange from "@ticatec/uniface-element/NumberRange";
    import utils from "$lib/utils";

    export let criteria;
    /**
     * 数字最小值
     */
    export let minField: string;
    /**
     * 数字最大值
     */
    export let maxField: string;
    export let variant: 'outlined' | 'filled';

    export let props: any;

    const acceptAttrs = ['style', 'min', 'max', 'allowNegative'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);


</script>

<NumberRange bind:fromValue={criteria[minField]} bind:toValue={criteria[maxField]} {variant} {...attrs}/>