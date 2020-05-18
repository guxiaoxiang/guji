<template>
  <div class="record_container">
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky>
        <van-nav-bar
          title="记账"
          left-text="重置"
          right-text="提交"
          @click-left="resetForm"
          @click-right="submitForm"
        />
      </van-sticky>
    </div>
    <!-- logo -->
    <logo class="logo"></logo>
    <!-- 记账表单 -->
    <div class="record_input">
      <div class="record_input_tab">
        <van-tabs animated @click="onChange">
          <van-tab title="收入" :model="incomeForm">
            <div class="record_input_money">
              <van-cell-group>
                <van-field
                  readonly
                  clickable
                  :value="incomeForm.money"
                  @touchstart.native.stop="keybroadShow = true"
                  :placeholder="incomeMoney"
                  name="money"
                >
                  <template #left-icon>
                    <van-icon name="gold-coin-o" size="20px" />
                  </template>
                </van-field>
              </van-cell-group>
            </div>
            <div class="record_input_type">
              <van-cell-group>
                <van-field :placeholder="incomeValue" v-model="incomeForm.type" readonly>
                  <template #left-icon>
                    <van-icon name="more-o" size="20px" />
                  </template>
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
                <van-field readonly :placeholder="incomeDate" v-model="incomeForm.date">
                  <template #left-icon>
                    <van-icon name="calender-o" size="20px" />
                  </template>
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
                  name="note"
                  show-word-limit
                  maxlength="10"
                  v-model="incomeForm.note"
                >
                  <template #left-icon>
                    <van-icon name="description" size="20px" />
                  </template>
                </van-field>
              </van-cell-group>
            </div>
          </van-tab>
          <van-tab title="支出" :model="spendForm">
            <div class="record_input_money">
              <van-cell-group>
                <van-field
                  readonly
                  clickable
                  v-model="spendForm.money"
                  @touchstart.native.stop="keybroadShow = true"
                  :placeholder="incomeMoney"
                  name="money"
                >
                  <template #left-icon>
                    <van-icon name="gold-coin-o" size="20px" />
                  </template>
                </van-field>
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
                  <template #left-icon>
                    <van-icon name="more-o" size="20px" />
                  </template>
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
                  <template #left-icon>
                    <van-icon name="calender-o" size="20px" />
                  </template>
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
                >
                  <template #left-icon>
                    <van-icon name="description" size="20px" />
                  </template>
                </van-field>
              </van-cell-group>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 提交
    <div class="record_btn">
      <van-button type="info" round class="record_btn_submit" @click="submitForm">提交</van-button>
      <van-button type="warning" round @click="resetForm">重置</van-button>
      <van-button type="danger" round class="record_btn_cancel" @click="back">取消</van-button>
    </div> -->
    <!-- 日期选择 -->
    <div class="popup">
      <van-popup v-model="show" @close="onClose" :position="position" :style="style">
        <van-calendar
          v-model="show"
          @confirm="onConfirmDate"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
    </div>
    <!-- 消费类别选择 -->
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
    <div>
      <van-number-keyboard
        v-model="incomeForm.money"
        :show="keybroadShow"
        :maxlength="6"
        @blur="moneyHandler"
        theme="custom"
        extra-key="."
        close-button-text="完成"
      />
    </div>
    <div>
      <van-number-keyboard
        v-if="this.state == 'income'"
        v-model="incomeForm.money"
        :show="keybroadShow"
        :maxlength="6"
        @blur="keybroadShow = false"
        theme="custom"
        extra-key="."
        close-button-text="完成"
      />
      <van-number-keyboard
        v-else
        v-model="spendForm.money"
        :show="keybroadShow"
        :maxlength="6"
        @blur="keybroadShow = false"
        theme="custom"
        extra-key="."
        close-button-text="完成"
      />
    </div>
  </div>
</template>

<script>
import logo from '../../components/logo'
import { RandomId } from '../../util/randomId'
import { Record } from '../../api/user'
import { Notify } from 'vant'
import { Toast } from 'vant'
export default {
  data: function() {
    return {
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2030, 0, 31),
      value: '',
      state: 'income',
      active: 0,
      color: 'blue',
      border: false,
      animated: true,
      incomeMoney: ' 请输入金额',
      outcomeMoney: ' 请输入金额',
      spendDate: '  请选择日期',
      incomeDate: '  请选择日期',
      keybroadShow: false,
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
  mounted(){
    setTimeout(() => {
      Notify({ type: 'success', message: '欢迎' + this.$store.getters.user.username ,duration:1000})
      // Toast.success('欢迎' + this.$store.getters.user.username)
    }, 500)
  },
  components: {
    logo,
  },
  computed: {
    selectColumns() {
      return this.state == 'income' ? this.isColumns.inColumn : this.isColumns.outColumn
    },
  },
  methods: {
    moneyHandler() {
      this.keybroadShow = false
    },
    resetForm() {
      if (this.state == 'income') {
        this.incomeForm.money = ''
        this.incomeForm.type = ''
        this.incomeForm.date = ''
        this.incomeForm.note = ''
      } else {
        this.spendForm.money = ''
        this.spendForm.type = ''
        this.spendForm.date = ''
        this.spendForm.note = ''
      }
    },
    onChange(name, title) {
      // console.log(title)
      if (title == '支出') {
        this.state = 'spend'
      } else {
        this.state = 'income'
      }
      console.log(this.state)
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
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
    onConfirmDate(date) {
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
        let recordIncomeId = RandomId()
        obj.recordId = recordIncomeId
        obj.state = this.state
        obj.money = this.incomeForm.money
        obj.type = this.incomeForm.type
        if (this.incomeForm.date != '') {
          let rightDate = new Date(this.incomeForm.date).toISOString()
          obj.date = rightDate
        }
        obj.date = this.incomeForm.date
        obj.note = this.incomeForm.note
        obj.email = this.$store.getters.user.email
        switch (this.incomeForm.type) {
          case '工资':
            obj.img = require('@/assets/bill_icon/wage.png')
            break
          case '奖金':
            obj.img = require('@/assets/bill_icon/bonus.png')
            break
          case '津贴':
            obj.img = require('@/assets/bill_icon/allowance.png')
            break
          case '投资收益':
            obj.img = require('@/assets/bill_icon/profit.png')
            break
          case '其他':
            obj.img = require('@/assets/bill_icon/other.png')
            break
        }
        Record(obj).then(res => {
          if (res.code == 200) {
            Toast.success(res.message)
          } else {
            Notify({ type: 'warning', message: res.message })
          }
        })
      } else {
        var obj1 = {}
        let recordSpendId = RandomId()
        obj1.recordId = recordSpendId
        obj1.state = this.state
        obj1.money = this.spendForm.money
        obj1.type = this.spendForm.type
        obj1.date = this.spendForm.date
        obj1.note = this.spendForm.note
        obj1.email = this.$store.getters.user.email
        switch (this.spendForm.type) {
          case '交通':
            obj1.img = require('@/assets/bill_icon/traffic.png')
            break
          case '医疗':
            obj1.img = require('@/assets/bill_icon/medical.png')
            break
          case '日常':
            obj1.img = require('@/assets/bill_icon/daily.png')
            break
          case '服饰':
            obj1.img = require('@/assets/bill_icon/clothes.png')
            break
          case '娱乐':
            obj1.img = require('@/assets/bill_icon/entertainment.png')
            break
          case '其他':
            obj1.img = require('@/assets/bill_icon/other.png')
            break
        }
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
.logo {
  position: absolute;
  top: 35px;
  left: 50%;
}
.record_input {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
}
.record_input_money,
.record_input_type,
.record_input_date,
.record_input_note {
  margin: 15px 0;
}
.record_btn {
  position: absolute;
  top: 520px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
}
</style>
