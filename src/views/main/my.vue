<template>
  <div class="my_container">
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky>
        <van-nav-bar title="我的">
          <template #right>
            <span class="exit" @click="onClickRight" v-if="isExit">退出登录</span>
          </template>
        </van-nav-bar>
      </van-sticky>
    </div>
    <div class="user">
      <div class="head_portrait">
        <img :src="headUrl" class="head_img" />
      </div>
      <div class="username" @click="toLogin">
        {{ isLogin }}
      </div>
    </div>
    <div class="user_info">
      <van-cell title="用户信息" icon="shop-o" @click="checkInfo"> </van-cell>
    </div>
    <div class="modify">
      <van-cell title="修改密码" icon="shop-o" @click="modifyPwd"> </van-cell>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'

export default {
  data() {
    return {
      headUrl: 'https://guolin.oss-cn-beijing.aliyuncs.com/system/head.png',
      username: '未登录',
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.user.username == null
        ? '点击登录'
        : this.$store.getters.user.username
    },
    isExit() {
      return this.$store.getters.user.username
    },
  },
  methods: {
    modifyPwd() {
      this.$router.push('/bar/my/modifyPassword')
    },
    checkInfo() {
      this.$router.push('/bar/my/userInfo')
    },
    toLogin() {
      this.$router.push('/login')
    },
    onClickRight() {
      Dialog.confirm({
        message: '确定退出登录吗？',
      })
        .then(() => {
          // on confirm
          var that = this
          setTimeout(function() {
            that.$store.commit('clearUser')
          }, 2000)
        })
        .catch(() => {
          // on cancel
        })
    },
  },
}
</script>

<style scoped>
.exit {
  text-decoration: none;
  color: cadetblue;
}
.user {
  position: relative;
  top: 30px;
  width: 100%;
  height: 70px;
  text-align: left;
}
.head_portrait {
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: pink;
  border-radius: 50%;
  margin-left: 30px;
  overflow: hidden;
}
.head_img {
  width: 70px;
  height: 70px;
}
.username {
  position: absolute;
  top: 0px;
  left: 80px;
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /* background-color: pink; */
  margin-left: 30px;
  margin-top: 15px;
  box-shadow: 5px 5px 5px #888888;
  border-radius: 10px;
  font-size: 20px;
}
.user_info {
  position: absolute;
  top: 180px;
  width: 100%;
  text-align: left;
  font-size: 16px;
}
.modify {
  position: absolute;
  top: 260px;
  width: 100%;
  text-align: left;
  font-size: 16px;
}
</style>
