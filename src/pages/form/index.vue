<template>
  <div>
    <h1 v-text="title"></h1>
    <i-panel title="新增">
        <form @submit="formSubmit" @reset="formReset">
            <i-input :value="formData.workId" name="workId" maxlength="20" title="编号" @change="setWorkId" autofocus placeholder="请输入" />
            <i-input :value="formData.name" name="name" maxlength="20" title="姓名" @change="setName" placeholder="请输入"/>
            <i-input :value="formData.age" name="age" maxlength="10" type="number" @change="setAge" title="年龄" placeholder="请输入"  />
            <!-- <div>
                <picker @change="bindPickerChange" :value="index" :range="array">
                    <div class="picker">
                        当前选择：{{array[index]}}
                    </div>
                </picker>
                <picker @change="bindPickerChange1" :value="index1" name="country" range-key="name" :range="objectArray">
                    <view class="picker">
                    当前选择：{{objectArray[index1].name}}
                    </view>
                </picker>
            </div> -->
            <button formType="submit">添加</button>
        </form>
    </i-panel>
    <i-panel title="删除">
        <form @submit="delSubmit">
            <div>
                <picker @change="bindPickerChange" :value="index1" name="country" range-key="name" :range="objectArray">
                    <view class="picker">
                    当前选择：{{objectArray[index].name}}
                    </view>
                </picker>
            </div>
            <button formType="submit">删除</button>
        </form>
    </i-panel>
    <i-panel title="更改">
        <form @submit="updateSubmit">
            <i-input :value="formData1.workId" name="workId" maxlength="20" title="编号" @change="setWorkId1" autofocus placeholder="请输入" />
            <i-input :value="formData1.name" name="name" maxlength="20" title="姓名" @change="setName1" placeholder="请输入"/>
            <i-input :value="formData1.age" name="age" maxlength="10" type="number" @change="setAge1" title="年龄" placeholder="请输入"  />
            <button formType="submit">更改</button>
        </form>
    </i-panel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Form表单',
      formData: {
        workId: '',
        name: 'jerry',
        age: '18'
      },
      formData1: {
        workId: '',
        name: '',
        age: ''
      },
      index: 0,
      objectArray: null
    }
  },
  created () {
    const _this = this
    this.$httpWX.get({
      url: '/weapp/select'
    }).then((res) => {
      _this.objectArray = res.data.msg
      console.log(_this.objectArray)
    })
    console.log('wx : ' + wx)
  },
  methods: {
    submitBtn (e) {
      console.log(e.detail)
    },
    setWorkId (e) {
      this.formData.workId = e.target.detail.value
    },
    setName (e) {
      this.formData.name = e.target.detail.value
    },
    setAge (e) {
      this.formData.age = e.target.detail.value
    },
    bindPickerChange (e) {
      this.index = e.target.value
    },
    formSubmit (e) {
      console.log('form发生了submit事件，携带数据为：', e.target.value)
      this.$httpWX.post({
        url: '/weapp/add',
        data: e.target.value
      })
    },
    delSubmit (e) {
      const id = this.objectArray[this.index].id
      console.log('index=' + this.index + '\n' + 'id=' + id)
      console.log('form发生了submit事件，携带数据为：', e.target.value)
      this.$httpWX.get({
        url: '/weapp/del',
        data: {id}
      })
    },
    updateSubmit (e) {
      console.log('form发生了submit事件，携带数据为：', e.target.value)
      this.$httpWX.get({
        url: '/weapp/update',
        data: e.target.value
      })
    }
  }
}
</script>
