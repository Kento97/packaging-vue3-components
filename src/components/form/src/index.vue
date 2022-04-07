<template>
  <el-form v-if="model" :model="model" :rules="rules" :validate-on-rule-change="false" v-bind="$attrs">
    <template v-for="(item,index) in options">
      <el-form-item
          v-if="!item.children || item.children.length===0"
          :key="index"
          :label="item.label"
          :prop="item.prop">
        <component
            :is="`el-${item.type}`"
            v-if="item.type !== 'upload'"
            v-model="model[item.prop]"
            v-bind="item.attrs"
        />
        <el-upload
            v-else
            :before-remove="beforeRemove"
            :before-upload="beforeUpload"
            :http-request="httpRequest"
            :on-change="onChange"
            :on-error="onError"
            :on-exceed="onExceed"
            :on-preview="onPreview"
            :on-progress="onProgress"
            :on-remove="onRemove"
            :on-success="onSuccess"
            v-bind="item.uploadAttrs"
            :file-list="fileList"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item
          v-if="item.children && item.children.length!==0"
          :key="index"
          :label="item.label"
          :prop="item.prop">
        <component
            :is="`el-${item.type}`"
            v-model="model[item.prop]"
            v-bind="item.attrs"
        >
          <component
              :is="`el-${child.type}`"
              v-for="(child,indey) in item.children"
              :key="indey"
              :label="child.label"
              :value="child.value"
          />
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang='ts' setup>

import type {FormOptions} from "@/components/form/src/types/types";
import {ref, watch} from "vue";
import cloneDeep from "lodash/cloneDeep";
import type {RuleItem} from "@/components/form/src/types/rule";
import type {UploadFile, UploadFiles, UploadProgressEvent, UploadRawFile, UploadRequestOptions} from "element-plus";
import type {UploadUserFile} from "element-plus";

interface IProps {
  //表单的配置项
  options: FormOptions[],
  fileList: UploadUserFile[]
}

const {options, fileList} = defineProps<IProps>();

const model = ref<Record<string, any>>();
const rules = ref<Record<string, RuleItem[]>>();
const gender = ref<string>("男");
initForm();

function initForm() {
  if (options && options.length) {
    const m: Record<string, string> = {};
    const r: Record<string, RuleItem[]> = {};
    options.forEach((item: FormOptions) => {
      m[item.prop as string] = item.value;
      r[item.prop as string] = item.rules as RuleItem[];
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
}

//监听父组件传递进来的 options
watch(() => options, (val) => {
  initForm();
}, {deep: true});

const emits = defineEmits([
  'on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove', 'http-request'
]);

//上传组件的所有方法
const onPreview = (uploadFile: UploadFile) => {
  emits('on-preview', uploadFile);
};
const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-remove', {uploadFile, uploadFiles});
};
const onSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-success', {response, uploadFile, uploadFiles});
};
const onError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-error', {error, uploadFile, uploadFiles});
};
const onProgress = (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-progress', {evt, uploadFile, uploadFiles});
};
const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-change', {uploadFile, uploadFiles});
};
const onExceed = (files: File[], uploadFiles: UploadFiles) => {
  emits('on-exceed', {files, uploadFiles});
};
const beforeUpload: any = (rawFile: UploadRawFile) => {
  emits('before-upload', rawFile);
};
const beforeRemove: any = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('before-remove', {uploadFile, uploadFiles});
};
const httpRequest: any = (options: UploadRequestOptions) => {
  emits('http-request', options);
};
</script>

<style scoped>

</style>
