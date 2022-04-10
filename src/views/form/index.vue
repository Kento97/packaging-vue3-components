<template>
  <div>
    <my-form
        ref="form"
        :options="options"
        label-width="100px"
        @on-preview="handlePreview"
        @on-remove="handleRemove"
        @before-remove="beforeRemove"
        @on-exceed="handleExceed"
        @on-success="handleSuccess"
        @on-change="handleChange"
        @before-upload="handleBeforeUpload"
        @clearFileList="clearFileList"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)"
        >Create
        </el-button
        >
        <el-button @click="resetForm">Reset</el-button>
      </template>
    </my-form>
  </div>
</template>

<script lang='ts' setup>

import {ref} from "vue";
import type {FormOptions} from "@/components/form/src/types/types";
import {ElMessage, ElMessageBox, type UploadProps, type UploadUserFile} from 'element-plus';
import type {FormInstance} from 'element-plus';

interface IScope {
  form: FormInstance,
  model: any
}


function submitForm(scope: IScope) {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
      ElMessage.success("验证成功");
    } else {
      console.log(scope.model);
      ElMessage.error("验证失败");
    }
  });
}

function resetForm() {
  form.value.resetFields();
}

const fileList = ref<UploadUserFile[]>([]);

function clearFileList() {
  fileList.value.splice(0);
}

// function clearFileList() {
//   fileList.value = [];
// }

const form = ref();
const options = ref<FormOptions[]>([
  {
    type: 'input',
    value: 'admin',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2~6位之间",
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    value: '123123',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '1',
    placeholder: "请选择职位",
    prop: "role",
    label: '职位',
    attrs: {
      style: {
        width: '100%',
      }
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      },
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      limit: 3,
      multiple: true,
      fileList: fileList.value
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
      }
    ],
  },
  {
    type: 'editor',
    value: '123',
    prop: 'desc',
    label: '描述',
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ],
  }
]);
const handleChange = (val: any) => {
  console.log('handleChange');
  console.log(val);
};

const handleBeforeUpload = (rawFile: any) => {
  console.log('handleBeforeUpload');
  console.log(rawFile);
};
const handleRemove: UploadProps['onRemove'] = (val: any) => {
  console.log('handleRemove');
  console.log(val);
};

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log('handlePreview');
  console.log(uploadFile);
};

const handleExceed: UploadProps['onExceed'] = (val: any) => {
  console.log('handleExceed');
  ElMessage.warning(
      `The limit is 3, you selected ${val.files.length} files this time, add up to ${
          val.files.length + val.uploadFiles.length
      } totally`
  );
};
const beforeRemove: UploadProps['beforeRemove'] = (val: any) => {
  console.log('beforeRemove');
  return ElMessageBox.confirm(
      `Cancel the transfert of ${val.uploadFile.name} ?`
  ).then(
      () => true,
      () => false
  );
};

const handleSuccess = (val: any) => {
  console.log('success');
  console.log(val);
};
</script>

<style scoped>

</style>
