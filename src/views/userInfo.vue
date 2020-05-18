<template>
  <div>
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky v-if="disabled">
        <van-nav-bar
          title="用户信息"
          left-text="返回"
          right-text="编辑"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
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
        :disabled="disabled"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="phone"
        :disabled="disabled"
        type="phone"
        name="电话号码"
        label="电话号码"
        placeholder="电话号码"
      />
      <van-field
        v-model="email"
        :disabled="disabled"
        type="eamil"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
      />
    </div>
  </div>
</template>

<script>
import modifyInfo from '../api/user'
export default {
  data() {
      return {
          disabled:true,
          username:this.$store.getters.user.username,
          phone:this.$store.getters.user.phone,
          email:this.$store.getters.user.email
      }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/bar/my')
    },
    onClickRight() {
      this.disabled = false
    },
    onClickFinish(){
      console.log('111')
      this.disabled = true

      const obj = {}
      obj.username = this.username
      obj.phone = this.phone
      obj.email = this.email

      modifyInfo(obj).then(res=>{
          if(res.code == 200){
              console.log(111)
          }
      })
    }
  },
}
</script>

<style scoped></style>
