<script lang="ts">

    import DateRange from "@ticatec/uniface-element/DateRange";
    import utils from "$lib/utils";

    export let criteria;
    /**
     * 开始日期
     */
    export let fromField: string;
    /**
     * 结束日期
     */
    export let toField: string;
    export let props: any;

    export let variant: 'outlined' | 'filled';

    const acceptAttrs = ['style', 'format', 'min', 'max'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);


</script>

<DateRange bind:fromValue={criteria[fromField]} bind:toValue={criteria[toField]} {variant} {...attrs}/>