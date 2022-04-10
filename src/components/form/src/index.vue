<template>
  <el-form v-if="model" ref="form" :model="model" :rules="rules" :validate-on-rule-change="false" v-bind="$attrs">
    <template v-for="(item,index) in options">
      <el-form-item
          v-if="!item.children || item.children.length===0"
          :key="index"
          :label="item.label"
          :prop="item.prop">
        <component
            :is="`el-${item.type}`"
            v-if="item.type !== 'upload' && item.type!=='editor'"
            v-model="model[item.prop]"
            v-bind="item.attrs"
        />
        <div v-if="item.type === 'editor'" id="editor" style="position: relative;z-index: 0;"></div>
        <el-upload
            v-if="item.type === 'upload'"
            ref="uploadInstance"
            :before-remove="beforeRemove"
            :before-upload="beforeUpload"
            :on-change="onChange"
            :on-error="onError"
            :on-exceed="onExceed"
            :on-preview="onPreview"
            :on-progress="onProgress"
            :on-remove="onRemove"
            :on-success="onSuccess"
            v-bind="item.uploadAttrs"
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
    <el-form-item>
      <slot :form="form" :model="model" name="action"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import E from "wangeditor";
import type {FormOptions} from "@/components/form/src/types/types";
import {nextTick, ref, watch} from "vue";
import cloneDeep from "lodash/cloneDeep";
import type {RuleItem} from "@/components/form/src/types/rule";
import type {
  UploadFile,
  UploadFiles,
  UploadInstance,
  UploadProgressEvent,
  UploadProps,
  UploadRawFile,
  UploadRequestOptions
} from "element-plus";
import type {FormInstance} from 'element-plus';

interface IProps {
  //表单的配置项
  options: FormOptions[],
}

const {options} = defineProps<IProps>();

const form = ref<FormInstance>();

const model = ref<Record<string, any>>();
const rules = ref<Record<string, RuleItem[]>>();
const edit = ref<E>();
let isInitEditor = true;
const uploadInstance = ref<UploadInstance>();
initForm();

function initForm() {
  if (options && options.length) {
    const m: Record<string, string> = {};
    const r: Record<string, RuleItem[]> = {};
    options.forEach((item: FormOptions) => {
      m[item.prop as string] = item.value;
      r[item.prop as string] = item.rules as RuleItem[];
      if (item.type === 'editor' && isInitEditor) {
        //初始化富文本
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E("#editor");
            editor.config.placeholder = item.placeholder as string;
            editor.create();
            editor.txt.html(item.value); // 初始化编辑器内容
            // 配置 onchange 回调函数
            editor.config.onchange = (newHTML: string) => {
              (model.value as Record<string, any>)[item.prop as string] = newHTML;
            };
            edit.value = editor;
          }
        });
      }
    });
    if (isInitEditor) {
      model.value = cloneDeep(m);
      rules.value = cloneDeep(r);
    }
  }
}

//重置表单
const resetFields = () => {
  //重置element plus表单
  form.value?.resetFields();
  //重置富文本编辑器的内容
  if (options && options.length) {
    const editorItem = options.find((item) => item.type === 'editor');
    edit.value?.txt.html((editorItem as FormOptions).value);
  }
  //清除文件上传列表
  uploadInstance.value?.clearFiles();
  emits('clearFileList');
};
defineExpose({
  resetFields
});

//监听父组件传递进来的 options
// watch(() => options, (val) => {
//   isInitEditor = false;
//   initForm();
// }, {deep: true});

const emits = defineEmits([
  'on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove', 'http-request', 'clearFileList'
]);

//上传组件的所有方法
const onPreview = (uploadFile: UploadFile) => {
  emits('on-preview', uploadFile);
};
const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-remove', {uploadFile, uploadFiles});
};
const onSuccess: UploadProps['onSuccess'] = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  const uploadItem = options.find((item) => item.type === 'upload');
  if (uploadItem && uploadItem.prop && model.value) {
    model.value[uploadItem.prop] = {response, uploadFile, uploadFiles};
  }
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
  console.log('溢出');
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
