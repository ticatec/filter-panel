<script lang="ts">

    import "@ticatec/uniface-element/ticatec-uniface-web.css"
    import "$lib/uniface-filter-panel.css"
    import "./app.css";
    import {onMount} from "svelte";
    import DemoPage from "./DemoPage.svelte";

    import {registerComponents} from "$lib/components/CriteriaComponents";

    const isDev = import.meta.env.MODE == "development" || import.meta.env.DEV;
    const inFrame = window.frameElement !== null;
    let mainHome: any;
    let params: any;


    onMount(async () => {
        if (isDev && !inFrame) {
            mainHome = (await import('@ticatec/uniface-dev-shell')).default;
            params = {
                menu: (await import('./menu')).default,
                title: '查询条件面板展示'
            }
        } else {
            registerComponents();
            mainHome = DemoPage;
            params = {}
        }
    });



</script>

{#if mainHome}
    <svelte:component this={mainHome} {...params}/>
{/if}




