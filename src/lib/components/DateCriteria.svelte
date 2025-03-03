<script lang="ts">

    import DatePicker from "@ticatec/uniface-element/DatePicker";

    export let criteria;
    /**
     * 日期字段名
     */
    export let field: string;


    export let variant: 'outlined' | 'filled';

    const acceptAttrs = ['style', 'format', 'min', 'max', 'placeholder'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);


</script>

<DatePicker bind:value={criteria[field]} {variant} {...attrs}/>