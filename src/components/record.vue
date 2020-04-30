<template>
  <div class="record_container">
    <div class="record_logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="record_input">
      <div class="record_input_title">
        <span>Hello,{{ this.$store.getters.user.username }}</span>
      </div>
      <div class="record_input_tab">
        <van-tabs animated @click="onChange">
          <van-tab title="收入" :model="incomeForm">
            <div class="record_input_money">
              <van-cell-group>
                <van-field
                  placeholder="  请输入消费金额"
                  left-icon="gold-coin-o"
                  name="money"
                  v-model="incomeForm.money"
                />
              </van-cell-group>
            </div>
            <div class="record_input_type">
              <van-cell-group>
                <van-field
                  :placeholder="incomeValue"
                  left-icon="more-o"
                  v-model="incomeForm.type"
                  readonly
                >
                  <van-button
                    type="default"
                    is-link
                    @click="isShowPicker"
                    slot="button"
                    size="small"
                    name="type"
                    >选择类别</van-button
                  >
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_date">
              <van-cell-group>
                <van-field
                  readonly
                  :placeholder="incomeDate"
                  left-icon="calender-o"
                  v-model="incomeForm.date"
                >
                  <van-button
                    type="default"
                    is-link
                    @click="showPopup"
                    slot="button"
                    size="small"
                    name="date"
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
                  name="note"
                  show-word-limit
                  maxlength="10"
                  v-model="incomeForm.note"
                />
              </van-cell-group>
            </div>
          </van-tab>
          <van-tab title="支出" :model="spendForm">
            <div class="record_input_money">
              <van-cell-group>
                <van-field
                  placeholder="  请输入消费金额"
                  left-icon="gold-coin-o"
                  name="money"
                  v-model="spendForm.money"
                />
              </van-cell-group>
            </div>
            <div class="record_input_type">
              <van-cell-group>
                <van-field
                  :placeholder="spendValue"
                  left-icon="more-o"
                  v-model="spendForm.type"
                  readonly
                >
                  <van-button
                    type="default"
                    is-link
                    @click="isShowPicker"
                    slot="button"
                    size="small"
                    name="type"
                    >选择类别</van-button
                  >
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_date">
              <van-cell-group>
                <van-field
                  :placeholder="spendDate"
                  left-icon="calender-o"
                  v-model="spendForm.date"
                  readonly
                >
                  <van-button
                    type="default"
                    is-link
                    @click="showPopup"
                    slot="button"
                    size="small"
                    name="date"
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
                  show-word-limit
                  maxlength="10"
                  placeholder="  请输入说明"
                  left-icon="description"
                  name="note"
                  v-model="spendForm.note"
                />
              </van-cell-group>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="record_btn">
      <van-button type="info" round class="record_btn_submit" @click="submitForm">提交</van-button>
      <van-button type="danger" round class="record_btn_cancel" @click="back">取消</van-button>
    </div>
    <div class="popup">
      <van-popup v-model="show" @close="onClose" :position="position" :style="style">
        <van-calendar v-model="show" @confirm="onConfirm" />
      </van-popup>
    </div>
    <div class="picker">
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="selectColumns"
          @cancel="noShowPicker"
          @confirm="isConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Record } from '../api/user'
import { Notify } from 'vant'
import { Toast } from 'vant'
export default {
  data: function() {
    return {
      value: '',
      state: 'income',
      active: 0,
      color: 'blue',
      border: false,
      animated: true,
      spendDate: '  请选择日期',
      incomeDate: '  请选择日期',
      show: false,
      position: 'bottom',
      style: {
        height: '50%',
      },
      spendValue: '  请选择类别',
      incomeValue: '  请选择类别',
      showPicker: false,
      isColumns: {
        outColumn: ['交通', '医疗', '日常', '服饰', '娱乐', '其他'],
        inColumn: ['工资', '奖金', '津贴', '投资收益', '其他'],
      },
      incomeForm: {
        money: '',
        type: '',
        date: '',
        note: '',
      },
      spendForm: {
        money: '',
        type: '',
        date: '',
        note: '',
      },
    }
  },
  computed: {
    selectColumns() {
      return this.state == 'income' ? this.isColumns.inColumn : this.isColumns.outColumn
    },
  },
  methods: {
    onChange(index, title) {
      // console.log(title)
      if (title == '支出') {
        title = 'spend'
      } else {
        title = 'income'
      }
      this.state = title
    },
    back: function() {
      this.$router.push('/homepage')
    },
    showPopup: function() {
      this.show = true
    },
    onClose: function() {
      this.show = false
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      if (this.state == 'income') {
        this.incomeForm.date = this.formatDate(date)
      } else {
        this.spendForm.date = this.formatDate(date)
      }
      this.show = false
    },
    isConfirm(value) {
      if (this.state == 'income') {
        this.incomeForm.type = value
      } else {
        this.spendForm.type = value
      }
      // this.value = value
      this.showPicker = false
    },
    isShowPicker: function() {
      this.showPicker = true
    },
    noShowPicker: function() {
      this.showPicker = false
    },
    submitForm() {
      if (this.state == 'income') {
        var obj = {}
        obj.state = this.state
        obj.money = this.incomeForm.money
        obj.type = this.incomeForm.type
        obj.date = this.incomeForm.date
        obj.note = this.incomeForm.note
        obj.email = this.$store.getters.user.email
        console.log(obj.date)
        Record(obj).then(res => {
          if (res.code == 200) {
            Toast.success(res.message)
          } else {
            Notify({ type: 'warning', message: res.message })
          }
        })
      } else {
        var obj1 = {}
        obj1.state = this.state
        obj1.money = this.spendForm.money
        obj1.type = this.spendForm.type
        obj1.date = this.spendForm.date
        obj1.note = this.spendForm.note
        obj1.email = this.$store.getters.user.email
        Record(obj1).then(res => {
          if (res.code == 200) {
            Toast.success(res.message)
          } else {
            Notify({ type: 'warning', message: res.message })
          }
        })
      }
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
  top: 570px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
}
.record_btn_cancel {
  padding: 10px;
}
</style>
