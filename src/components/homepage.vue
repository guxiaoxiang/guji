<template>
  <div class="homepage_container">
    <div class="homepage_logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="homepage_item">
      <van-cell title="记账" size="large" is-link to="/homepage/record">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon name="gold-coin-o" size="25px" />
        </template>
      </van-cell>
      <van-cell title="查看流水" size="large" is-link to="/homepage/view">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon name="bill-o" size="25px" />
        </template>
      </van-cell>
      <van-cell title="收支分析" size="large" is-link to="/homepage/record">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon name="chart-trending-o" size="25px" />
        </template>
      </van-cell>
    </div>
    <div class="homepage_back">
      <van-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        class="back"
        @click="loginout"
      >
        退出登录
      </van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  // data(){
  //   return {
  //     title
  //   }
  // }
  mounted() {
    setTimeout(() => {
      Toast.success('欢迎' + this.$store.getters.user.username)
    }, 1000)
  },
  methods: {
    loginout() {
      var that = this
      setTimeout(function() {
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
        })
        that.$store.commit('clearUser')
        that.$router.push('/login')
      }, 2000)
    },
  },
}
</script>

<style scoped>
.homepage_logo {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 130px;
}
.homepage_logo img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.homepage_logo img:hover {
  transform: scale(1.1);
}
.homepage_item {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
.homepage_item span {
  /* position: absolute;
  top: 200px;
  left: 50%; */
  transform: translateX(-50%);
  text-align: center;
  font-size: 20px;
}
.homepage_back {
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
