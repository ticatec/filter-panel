<script lang="ts">

    import BasicFilterPanel from "./BasicFilterPanel.svelte";
    import AdvancedFilterPanel from "./AdvancedFilterPanel.svelte";
    import type {MouseClickHandler} from "@ticatec/uniface-element";
    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import FullScreenOverlay from "@ticatec/uniface-element/FullScreenOverlay";

    export let resetClickHandler: MouseClickHandler;
    export let searchClickHandler: MouseClickHandler;

    export let actions: ButtonActions = [];

    export let advancedCriteriaTitle: string = 'More'

    export let style: string = "";
    export let advStyle: string = "";

    export let hasAdvanced: boolean = true;

    const advancedClickHandler = () => {
        showAdvanced = true;
    };

    let showAdvanced: boolean = false;

    let showAdvancedButton: boolean = hasAdvanced && $$slots['advanced-panel'];

    const advancedSearchClickHandler = (event: MouseEvent) => {
        searchClickHandler?.(event);
        showAdvanced = false;
    }

</script>

<BasicFilterPanel {style} {resetClickHandler} {searchClickHandler} {actions} advancedClickHandler={showAdvancedButton ? advancedClickHandler : null}>
    <slot></slot>
</BasicFilterPanel>
{#if showAdvanced}
    <FullScreenOverlay bind:visible={showAdvanced}>
        <AdvancedFilterPanel style={advStyle} closeHandler={()=>{showAdvanced = false}}
                             confirmHandler={advancedSearchClickHandler} title={advancedCriteriaTitle}>
            <slot name="advanced-panel"></slot>
        </AdvancedFilterPanel>
    </FullScreenOverlay>
{/if}