export type RouterType = RouterChild[];
export type RouterChildComponent = {
    __hmrId: string;
    __file: string;
}
export type RouterChildMeta = {
    label: string;
    icon: string;
}
export type RouterChild = {
    path: string;
    name: string;
    component: RouterChildComponent;
    meta: RouterChildMeta;
    children: RouterChild[];
}
