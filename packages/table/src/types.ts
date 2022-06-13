export interface TableOptions {
    //表头
    label: string,
    //字段名称
    prop?: string,
    //当前的列宽度
    width?: string | number,
    //对其方式
    align?: 'left' | 'center' | 'right',
    //自定义列表模板名称
    slot?: string,
    //是否代表操作项
    action?: boolean
}
