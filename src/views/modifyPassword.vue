<template>
  <div>
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky>
        <van-nav-bar
          title="密码修改"
          left-text="返回"
          right-text="保存"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickSave"
        />
      </van-sticky>
    </div>
    <div class="infoList">
      <van-field type="password" placeholder="请输入原密码" v-model="oldPwd" @blur="isDisabled" />
      <van-field type="password" placeholder="请输入新密码" v-model="newPwd" :disabled="disabled" />
      <van-field
        type="password"
        placeholder="请确认新密码"
        v-model="comfirmPwd"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script>
import { Notify } from 'vant'
import { Dialog } from 'vant'
import { modifyPassword } from '../api/user.js'
export default {
  data() {
    return {
      disabled: true,
      oldPwd: '',
      newPwd: '',
      comfirmPwd: '',
    }
  },
  methods: {
    isDisabled() {
      if (this.oldPwd == '') {
        this.disabled = true
      } else {
        this.disabled = false
      }

      if (this.oldPwd != this.$store.getters.user.password) {
        Notify({ type: 'warning', message: '原密码输入不正确',duration:1000})
      }
    },
    onClickLeft() {
      this.$router.push('/bar/my')
    },
    onClickSave() {
      Dialog.confirm({
        message: '确定要保存修改吗？',
      })
        .then(() => {
          // on confirm
          if (this.newPwd != this.comfirmPwd) {
            Notify({ type: 'warning', message: '两次输入的新密码不相同',duration:1000 })
          } else {
            var obj = {}
            obj.email = this.$store.getters.user.email
            obj.newPwd = this.newPwd

            modifyPassword(obj).then(res => {
              if (res.code == 200) {
                Notify({ type: 'primary', message: '修改成功',duration:1000 })
              }
            })
          }
        })
    },
  },
}
</script>

<style lang="css" scoped></style>
