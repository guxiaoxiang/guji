<template>
  <div>
    <van-cell title="选择日期区间" :value="date" @click="show = true" />
    <van-calendar v-model="show" type="range" @confirm="onConfirm" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      date: '',
      show: false,
    }
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
    },
  },
}
</script>

<style scoped></style>
