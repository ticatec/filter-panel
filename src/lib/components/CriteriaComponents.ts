import TextEditorCriteria from "./TextEditorCriteria.svelte";
import DateRangeCriteria from "$lib/components/DateRangeCriteria.svelte";
import OptionsSelectorCriteria from "$lib/components/OptionsSelectorCriteria.svelte";
import OptionsMultiSelectorCriteria from "$lib/components/OptionsMultiSelectorCriteria.svelte";
import NumberRangeCriteria from "$lib/components/NumberRangeCriteria.svelte";
import DatePicker from "@ticatec/uniface-element/DatePicker";
import NumberCriteria from "$lib/components/NumberCriteria.svelte";
import CascadeOptionsSelect from "@ticatec/uniface-element/CascadeOptionsSelect";
import CascadeSelectorCriteria from "$lib/components/CascadeSelectorCriteria.svelte";

export default class CriteriaComponents {

    private map: Map<string, any>;
    private static instance: CriteriaComponents;

    static getInstance() {
        if (CriteriaComponents.instance == null) {
            CriteriaComponents.instance = new CriteriaComponents()
        }
        return CriteriaComponents.instance;
    }

    private constructor() {
        this.map = new Map<string, any>();
    }

    /**
     * 根据类型获取组件
     * @param type
     */
    get(type: string): any {
        return this.map.get(type);
    }

    /**
     * 注册一个组件类型
     * @param type
     * @param component
     */
    register(type: string, component: any) {
        this.map.set(type, component);
    }

}

export function registerComponents(): void {
    let instance = CriteriaComponents.getInstance();
    instance.register('text-editor', TextEditorCriteria);
    instance.register('date-range', DateRangeCriteria);
    instance.register('options-selector', OptionsSelectorCriteria);
    instance.register('options-multi-selector', OptionsMultiSelectorCriteria);
    instance.register('number-range', NumberRangeCriteria);
    instance.register('date-picker', DatePicker);
    instance.register('number-editor', NumberCriteria);
    instance.register('cascade-selector', CascadeSelectorCriteria);
}