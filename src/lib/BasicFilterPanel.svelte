<script lang="ts">

    import {TextButton} from "@ticatec/uniface-element/Button";
    import type {MouseClickHandler} from "@ticatec/uniface-element";
    import i18n from "@ticatec/i18n";
    import type {ButtonAction, ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import ActionBar from "@ticatec/uniface-element/ActionBar";
    import langRes from "$lib/i18n_resources/en_res";

    export let style: string = "";
    /**
     * handle reset button click event
     */
    export let resetClickHandler: MouseClickHandler;
    /**
     * handle search button click event
     */
    export let searchClickHandler: MouseClickHandler;
    /**
     * handle advanced filter button click event
     */
    export let advancedClickHandler: MouseClickHandler | null = null;
    /**
     * More actions on action bar
     */
    export let actions: ButtonActions = [];


    let panelActions: ButtonActions = [];

    let resetAction: ButtonAction = {
        label: i18n.getText('uniface.filter_panel.btnReset', langRes.uniface.filter_panel.btnReset),
        type: 'default',
        handler: resetClickHandler
    }

    let searchAction: ButtonAction = {
        type: "primary",
        label: i18n.getText('uniface.filter_panel.btnSearch', langRes.uniface.filter_panel.btnSearch),
        handler: searchClickHandler
    }

    $: if (actions.length > 0) {
        panelActions = [...actions, null, resetAction, searchAction]
    } else {
        panelActions = [resetAction, searchAction]
    }

</script>
<div {style} class="uniface-filter-panel uniface-quick-filter-panel">
    <div class="filter-container">
        <div>
            <slot></slot>
        </div>
    </div>
    <div class="panel-footer">
        {#if advancedClickHandler}
            <div style="flex: 1 1 auto">
                <TextButton type="primary" label={i18n.getText('uniface.filter_panel.btnMoreCriteria', langRes.uniface.filter_panel.btnMoreCriteria)}
                            onClick={advancedClickHandler}/>
            </div>
        {/if}
        <ActionBar buttons={panelActions}/>
    </div>
</div>