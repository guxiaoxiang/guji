<template>
    <div class="container">
       <van-cell title="展示弹出层" is-link @click="showPopup" />
       <van-popup :show=show @close="onClose">内容</van-popup>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    showPopup: function () {
      this.show = true
    },
    onClose: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
