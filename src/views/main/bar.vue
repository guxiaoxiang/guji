<template>
  <div class="navBottom">
    <router-view />
    <van-tabbar route fixed>
      <van-tabbar-item to="/bar/record" icon="gold-coin-o">
        记账
      </van-tabbar-item>
      <van-tabbar-item to="/bar/view" icon="bill-o">
        查看流水
      </van-tabbar-item>
      <van-tabbar-item to="/bar/analysicBill" icon="chart-trending-o">
        收支分析
      </van-tabbar-item>
      <van-tabbar-item to="/bar/my" icon="search">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
