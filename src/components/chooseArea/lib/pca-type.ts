export type pcaDataType = pcaDataChild[];
export type PcaDataChildChildrenChildren = {
    code: string;
    name: string;
}
export type PcaDataChildChildren = {
    code: string;
    name: string;
    children: PcaDataChildChildrenChildren[];
}
export type pcaDataChild = {
    code: string;
    name: string;
    children: PcaDataChildChildren[];
}
