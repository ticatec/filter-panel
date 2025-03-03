<script lang="ts">

    import TextEditor from "@ticatec/uniface-element/TextEditor";

    export let criteria;
    export let field: string;

    export let variant: 'outlined' | 'filled';


</script>

<TextEditor disabled input$placeholder="unknown type" {variant}/>