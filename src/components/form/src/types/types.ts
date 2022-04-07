// 可配置的表单

import type {RuleItem} from "@/components/form/src/types/rule";
import type {CSSProperties} from "vue";
import type {UploadProps, UploadUserFile} from 'element-plus';

// 表单每一项的配置选项
export interface FormOptions {
    // 表单项显示的元素
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker'
        | 'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button'
        | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select'
        | 'transfer' | 'upload',
    //表单项的值
    value?: any,
    //表单项的label
    label?: string,
    //表单项的标识prop
    prop?: string,
    //表单项的验证规则
    rules?: RuleItem[],
    //表单项的占位符
    placeholder?: string,
    //表单元素特有的属性,通过 v-bind 绑定到该元素身上，实现 All in JS
    attrs?: {
        clearable?: boolean,
        showPassword?: boolean,
        disabled?: boolean,
        // css样式
        style?: CSSProperties,
    },
    // 表单项的子元素
    children?: FormOptions[],
    //处理上传组件的属性和方法
    uploadAttrs?: {
        action: string,
        headers?: Headers | Record<string, any>,
        method?: "post" | "put" | "patch",
        multiple?: boolean,
        data?: Record<string, any>,
        name?: string,
        withCredentials?: boolean,
        showFileList?: boolean,
        drag?: boolean,
        accept?: string,
        thumbnailMode?: boolean,
        fileList?: UploadUserFile[],
        listType?: "text" | "picture" | "picture-card",
        autoUpload?: boolean,
        disabled?: boolean,
        limit?: number
    }
}
