<template>
  <div class="homepage_container">
    <!-- logo -->
    <logo class="logo"></logo>
    <!-- item -->
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
      <van-cell title="收支分析" size="large" is-link to="/homepage/analysicBill">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon name="chart-trending-o" size="25px" />
        </template>
      </van-cell>
    </div>
    <!-- back -->
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
import logo from './logo'
import { Notify } from 'vant'
import { Toast } from 'vant'
export default {
  // data(){
  //   return {
  //     username:''
  //   }
  // }
  mounted() {
    setTimeout(() => {
      Notify({ type: 'success', message: '欢迎' + this.$store.getters.user.username ,duration:1000})
      // Toast.success('欢迎' + this.$store.getters.user.username)
    }, 500)
  },
  components:{
    logo
  },
  methods: {
    loginout() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      })
      this.$store.commit('clearUser')
      var that = this
      setTimeout(function() {
        that.$router.push('/login')
      }, 2000)
    },
  },
}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 25px;
  left: 50%;
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
.record_input_title {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
}
</style>
