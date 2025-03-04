<script lang="ts">

    import TextEditor from "@ticatec/uniface-element/TextEditor";
    import utils from "$lib/utils";

    export let criteria;
    export let field: string;

    export let variant: 'outlined' | 'filled';

    export let props: any;

    export let placeholder: string;

    const acceptAttrs = ['style', 'placeholder'];

    let attrs:any = {};

    $: attrs = utils.filterAttrs(props, acceptAttrs);


</script>

<TextEditor bind:value={criteria[field]} removable input$placeholder={placeholder} {variant} {...attrs}/>