<template>
  <div class="container">
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky>
        <van-nav-bar title="收支分析" left-text="返回" left-arrow @click-left="onClickLeft" />
      </van-sticky>
    </div>
    <!-- 日期选择区域 -->
    <div class="dateSelect">
      <van-cell title="选择日期区间" :value="date" @click="showPopup" />
    </div>
    <div class="table_show" v-if="visible">
      <van-tabs @click="onChange">
        <van-tab title="收入">
          <div id="echarts_pie_income"></div>
        </van-tab>
        <van-tab title="支出">
          <div id="echarts_pie_spend"></div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 日历控件 -->
    <div class="picker">
      <van-calendar
        v-model="show"
        @confirm="onConfirm"
        type="range"
        :min-date="minDate"
        :max-date="maxDate"
        allow-same-day
      />
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { analysicBill } from '../../api/user'

export default {
  data() {
    return {
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2030, 0, 31),
      show: false,
      demo: [],
      date: '',
      query: {},
      state: 'income',
      visible: false,
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // this.state='income'
      if (this.state == 'income') {
        var pieIncome = document.getElementById('echarts_pie_income')
        if (!pieIncome) {
          return false
        }
        var chartIncome = echarts.init(pieIncome)
        var optionIncome = {
          title: {
            text: '收入统计',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
          },
          series: {
            type: 'pie',
            data: this.demo,
            hoverAnimation: true,
            radius: '55%',
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 5,
            bottom: 20,
          },
        }
        chartIncome.setOption(optionIncome)
      } else {
        var pieSpend = document.getElementById('echarts_pie_spend')
        if (!pieSpend) {
          return false
        }
        var chartSpend = echarts.init(pieSpend)
        var optionSpend = {
          title: {
            text: '支出统计',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
          },
          series: {
            type: 'pie',
            data: this.demo,
            hoverAnimation: true,
            radius: '55%',
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
          },
        }
        chartSpend.setOption(optionSpend)
      }
    },
    loadViews() {
      analysicBill(this.query).then(res => {
        if (res.code == 200) {
          this.demo = res.data
          // console.log(this.demo)
          // this.state = 'income'
          this.drawLine()
        }
      })
    },
    onConfirm(date) {
      this.visible = true
      // this.state = 'income'
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`

      this.query.startTime = this.formatDate(start)
      this.query.endTime = this.formatDate(end)
      this.query.email = this.$store.getters.user.email
      this.query.state = 'income'

      this.loadViews()
    },
    showPopup() {
      this.show = true
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    onClickLeft() {
      this.$router.push('/homepage')
    },
    onChange(name, title) {
      // console.log(title)
      if (title == '支出') {
        this.state = 'spend'
        this.query.state = this.state
      } else {
        this.state = 'income'
        this.query.state = this.state
      }
      // console.log(this.state)
      this.loadViews()
    },
  },
}
</script>

<style scoped>
#echarts_pie_income {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 300px;
}
#echarts_pie_spend {
  position: absolute;
  top: 100px;
  width: 100%;
  height: 300px;
}
.dateSelect {
  text-align: left;
}
</style>
