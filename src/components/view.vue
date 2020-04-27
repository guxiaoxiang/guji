<template>
  <div class="container">
    <div class="view_logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="view_list">
      <div class="view_list_select">
        <van-cell title="选择日期区间" :value="date" @click="showPopup"/>
      </div>
    </div>
    <div class="picker">
      <van-calendar v-model="show" @confirm="onConfirm" type="range" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false,
      date: '',
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
    },
  },
}
</script>

<style scoped>
.view_logo {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 130px;
}
.view_logo img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.view_logo img:hover {
  transform: scale(1.1);
}
.view_list {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-color: pink;
  text-align: left;
}
</style>
