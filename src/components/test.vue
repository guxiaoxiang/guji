<template>
  <div>
    <!-- <van-field
  readonly
  clickable
  label="城市"
  :value="value"
  placeholder="选择城市"
  @click="showPicker = true"
/> -->
    <van-button
      type="default"
      is-link
      @click="isShowPicker"
      slot="button"
      size="small"
      readonly
      clickable
      :value="value"
      placeholder="选择城市"
      >选择类别</van-button
    >

    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="noShowPicker" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    },
    isShowPicker: function() {
      this.showPicker = true
    },
    noShowPicker: function() {
      this.showPicker = false
    },
  },
}
</script>

<style scoped></style>
