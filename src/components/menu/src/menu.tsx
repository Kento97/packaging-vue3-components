import {defineComponent, h, useAttrs, resolveComponent} from "vue";
import type {PropType} from "vue";
import type {RouterType} from "@/router/routeType";
import {toLine} from "@/utils";

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<RouterType>,
            required: true
        },
        defaultActive: {
            type: String,
            default: ''
        },
        router: {
            type: Boolean,
            default: false
        },
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {
        const renderMenu = (data: RouterType) => {
            return data.map((item) => {
                const iconName = item.meta.icon ? toLine(item.meta.icon) : "";
                const createIcon = (iconName: string) => {
                    if (!iconName) return;
                    else return h(resolveComponent(iconName));
                };
                //处理sub-menu的插槽
                const slots = {
                    title: () => {
                        return (
                            <>
                                <el-icon size={14}>
                                    {createIcon(iconName)}
                                </el-icon>
                                <span>{item.meta.label}</span>
                            </>
                        );
                    }
                };
                //递归渲染children
                if (item.children && item.children.length) {
                    return (
                        <el-sub-menu index={item.path} v-slots={slots}>
                            {renderMenu(item.children)}
                        </el-sub-menu>
                    );
                }
                //正常渲染普通的菜单
                return (
                    <el-menu-item index={item.path}>
                        <el-icon size={25}>
                            {createIcon(iconName)}
                        </el-icon>
                        <span>{item.meta.label}</span>
                    </el-menu-item>
                );
            });
        };
        const attrs = useAttrs();
        return () => {
            const {defaultActive, router, data, isCollapse} = props;
            return (
                <el-menu
                    default-active={defaultActive}
                    router={router}
                    isCollapse={isCollapse}
                    {...attrs}
                >
                    {renderMenu(data)}
                </el-menu>
            );
        };
    }
});
