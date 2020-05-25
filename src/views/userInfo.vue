<template>
  <div>
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky v-if="isDisabled">
        <van-nav-bar
          title="用户信息"
          left-text="返回"
          right-text="编辑"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickEdit"
        />
      </van-sticky>
      <van-sticky v-else>
        <van-nav-bar
          title="用户信息"
          left-text="返回"
          right-text="完成"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickFinish"
        />
      </van-sticky>
    </div>
    <div class="infoList">
      <van-field
        v-model="username"
        :disabled="isDisabled"
        type="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="phone"
        :disabled="isDisabled"
        type="phone"
        name="电话号码"
        label="电话号码"
        placeholder="电话号码"
      />
      <van-field
        v-model="email"
        disabled
        type="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
      />
    </div>
  </div>
</template>

<script>
import { modifyInfo } from '../api/user'
import { Dialog } from 'vant'
import { Toast } from 'vant'
import { Notify } from 'vant'

export default {
  data() {
    return {
      isDisabled: true,
      username: this.$store.getters.user.username,
      phone: this.$store.getters.user.phone,
      email: this.$store.getters.user.email,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/bar/my')
    },
    onClickEdit() {
      this.isDisabled = false
    },
    onClickFinish() {
      Dialog.confirm({
        message: '确认保存修改的信息吗？',
      })
        .then(() => {
          // on confirm
          this.isDisabled = true

          const obj = {}
          obj.username = this.username
          obj.phone = this.phone.toString()
          obj.email = this.email

          modifyInfo(obj).then(res => {
            if (res.code == 200) {
              this.$store.getters.user.username = this.username
              this.$store.getters.user.phone = this.phone
              Toast.success(res.message)
            } else {
              Notify({ type: 'warning', message: res.message,duration:1000 })
            }
          })
        })
    },
  },
}
</script>

<style scoped></style>
