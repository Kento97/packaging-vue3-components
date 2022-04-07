// 可配置的表单

import type {RuleItem} from "@/components/form/src/types/rule";

// 表单每一项的配置选项
export interface FormOptions {
    // 表单项显示的元素
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker'
        | 'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button'
        | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select'
        | 'transfer' | 'upload',
    //表单项的值
    value: any,
    //表单项的label
    label?: string,
    //表单项的标识prop
    prop?: string,
    //表单项的验证规则
    rules?: RuleItem[],
    //表单项的占位符
    placeholder?: '',
    //表单元素特有的属性,暂时给any
    attrs?: {
        clearable?: boolean,
        showPassword?: boolean,
        disabled?: boolean,
    },
}
