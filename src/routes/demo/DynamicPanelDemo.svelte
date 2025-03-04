<script lang="ts">

    import { type MetaCriteriaField} from "$lib";

    import type {ButtonActions} from "@ticatec/uniface-element/ActionBar";
    import DynamicFilterPanel from "$lib/DynamicFilterPanel.svelte";




    const confirmHandler = () => {
        console.log('开始查询数据....')
    }

    let criteria: any = {};

    let panelActions: ButtonActions = [
        {
            label: '新增',
            type: 'third',
            handler: () => {
            }
        },
        {
            label: '导出数据',
            icon: "uniface-icon-download",
            type: 'forth',
            handler: () => {
            }
        },
        {
            label: '批量导入',
            type: 'forth',
            icon: "uniface-icon-upload",
            handler: () => {
            }
        }
    ]
    const genderList: Array<any> = [
        {code: 'M', text: '男性'},
        {code: 'F', text: '女性'}
    ]

    const statusList = [
        {code: 'P', text: '待提交'},
        {code: 'S', text: '审批中'},
        {code: 'K', text: '审批完成'}
    ]

    let fields: Array<MetaCriteriaField> = [
        {
            type: 'text-editor',
            label: '姓名',
            size: 'x15',
            attrs: {
                field: "name"
            }
        },
        {
            type: 'options-selector',
            label: '性别',
            size: 'x15',
            attrs: {
                field: "gender"
            },
            props: {
                emptyText: "所有",
                options: genderList
            }
        },
        {
            type: 'options-multi-selector',
            label: '状态',
            size: 'x40',
            isAdvanced: false,
            attrs: {
                field: "status"
            },
            props: {
                emptyText: "所有",
                options: statusList
            }
        },
        {
            type: 'text-edit',
            label: '无效类型',
            size: 'x15',
            attrs: {
                field: "class"
            }
        }
    ];
    $: console.log("当前的查询条件", JSON.stringify(criteria))


</script>

<div style="width: 100%; padding: 12px; box-sizing: border-box; background-color: #F8FAFC">
    <DynamicFilterPanel bind:criteria resetClickHandler={()=>{}} searchClickHandler={()=>{}} variant="outlined" actions={panelActions}
                        {fields}/>
</div>

