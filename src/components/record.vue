<template>
  <div class="record_container">
    <div class="record_logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="record_input">
      <div class="record_input_title">
        <span>用户，您好</span>
      </div>
      <div class="record_input_tab">
        <van-tabs
          :active="active"
          :change="onChange"
          :color="color"
          :border="border"
          :animated="animated"
        >
          <van-tab title="收入">
            <div class="record_input_money">
              <van-cell-group>
                <van-field
                  placeholder="  请输入消费金额"
                  left-icon="gold-coin-o"
                />
              </van-cell-group>
            </div>
            <div class="record_input_type">
              <van-cell-group>
                <van-field
                  :placeholder="value"
                  left-icon="more-o"
                >
                  <van-button type="default" is-link @click="isShowPicker" slot="button" size="small">选择类别</van-button>
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_date">
              <van-cell-group>
                <van-field
                  :placeholder="date"
                  left-icon="calender-o"
                >
                  <van-button type="default" is-link @click="showPopup" slot="button" size="small"
                    >选择日期</van-button
                  >
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_note">
              <van-cell-group>
                <van-field
                  type="textarea"
                  rows="2"
                  autosize
                  placeholder="  请输入说明"
                  left-icon="description"
                />
              </van-cell-group>
            </div>
          </van-tab>
          <van-tab title="支出">
            <div class="record_input_money">
              <van-cell-group>
                <van-field
                  placeholder="  请输入消费金额"
                  left-icon="gold-coin-o"
                />
              </van-cell-group>
            </div>
            <div class="record_input_type">
              <van-cell-group>
                <van-field
                  :placeholder="value"
                  left-icon="more-o"
                >
                  <van-button type="default" is-link @click="isShowPicker" slot="button" size="small">选择类别</van-button>
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_date">
              <van-cell-group>
                <van-field
                  :placeholder="date"
                  left-icon="calender-o"
                >
                  <van-button type="default" is-link @click="showPopup" slot="button" size="small"
                    >选择日期</van-button
                  >
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_note">
              <van-cell-group>
                <van-field
                  type="textarea"
                  rows="2"
                  autosize
                  placeholder="  请输入说明"
                  left-icon="description"
                />
              </van-cell-group>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="record_btn">
      <van-button type="info" round class="record_btn_submit">提交</van-button>
      <van-button type="danger" round class="record_btn_cancel" @click="back"
        >取消</van-button
      >
    </div>
    <div class="popup">
      <van-popup v-model="show" @close="onClose" :position="position" :style="style">
        <van-calendar v-model="show" @confirm="onConfirm" />
      </van-popup>
    </div>
    <div class="picker">
      <van-popup v-model="showPicker" position="bottom">
        <van-picker show-toolbar :columns="outColumns" @cancel="noShowPicker" @confirm="isConfirm" />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      active: 0,
      color: 'blue',
      border: false,
      animated: true,
      date: '  请选择日期',
      show: false,
      position: 'bottom',
      style: {
        height: '50%',
      },
      value: '  请选择类别',
      showPicker: false,
      outColumns: ['交通', '医疗', '日常', '服饰', '娱乐','其他'],
      inColumns: ['交通', '医疗', '日常', '服饰', '娱乐','其他'],
    }
  },
  methods: {
    onChange(event) {
      this.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      })
    },
    back: function() {
      this.$router.go(-1)
    },
    showPopup: function() {
      this.show = true
    },
    onClose: function() {
      console.log('sss')
      this.show = false
    },
    formatDate(date) {
      console.log(date.getYear())
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      this.show = false
      this.date = this.formatDate(date)
    },
    isConfirm(value) {
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

<style>
.record_logo {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 130px;
}
.record_logo img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.record_logo img:hover {
  transform: scale(1.1);
}
.record_input {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
}
.record_input_title {
  font-size: 30px;
}
.record_input_money,
.record_input_type,
.record_input_date,
.record_input_note {
  margin: 15px 0;
}
.record_btn {
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
}
.record_btn_cancel {
  padding: 10px;
}
</style>
