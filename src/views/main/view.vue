<template>
  <div class="container">
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky>
        <van-nav-bar title="查看流水" right-text="回收站" @click-right="onClickRight" />
      </van-sticky>
    </div>
    <!-- logo -->
    <logo class="logo"></logo>
    <!-- 账单列表 -->
    <div class="view_list">
      <!-- 日期选择区域 -->
      <div class="view_list_select">
        <van-cell title="选择日期区间" :value="date" @click="showPopup" />
      </div>
      <!-- 账单展示区域 -->
      <div v-if="this.billList.length != 0">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-swipe-cell v-for="(item, index) in billList" :key="index">
            <van-card :price="item.money" :desc="item.note" :title="item.type">
              <template #thumb>
                <img :src="item.img" style="width:90%;margin-top:10px" />
              </template>
              <template #tags>
                <van-tag round :type="item.state == 'income' ? 'success' : 'danger'">
                  {{ item.state == 'income' ? '收入' : '支出' }}
                </van-tag>
              </template>
              <template #footer>
                <span
                  >{{ new Date(item.date).getFullYear() }}-{{
                    new Date(item.date).getMonth() + 1
                  }}-{{ new Date(item.date).getDate() }}</span
                >
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="deleteBill(item.recordId)"
              />
            </template>
          </van-swipe-cell>
        </van-list>
      </div>
      <div v-else>
        <van-empty image="search" description="这段时间无消费记录哦。。。" />
      </div>
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
import logo from '../../components/logo'
import { Delete } from '../../api/user'
import { View } from '../../api/user'
import { Notify } from 'vant'
import { Dialog } from 'vant'
export default {
  data: function() {
    return {
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2030, 0, 31),
      show: false,
      date: '',
      billList: [],
      list: [],
      finished: false,
      loading: false,
      query: {},
    }
  },
  components: {
    logo,
  },
  computed: {
    selectTag() {
      return this.type == 'income' ? 'success' : 'danger'
    },
  },
  methods: {
    onClickRight(){
      this.$router.push('/bar/view/deleteBill')
    },
    deleteBill(id) {
      // console.log(id)
      Dialog.confirm({
        message: '确定删除这张账单吗？',
      })
        .then(() => {
          // on confirm
          Delete({ id }).then(res => {
            if (res.code == 200) {
              Notify({ type: 'success', message: res.message, duration: 1000 })
              this.loadViews()
            }
          })
        })
        .catch(() => {
          // on cancel
        })
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < this.billList.length; i++) {
          this.list.push(this.billList[i])
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= this.billList.length) {
          this.finished = true
        }
      }, 1000)
    },
    showPopup() {
      this.show = true
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    loadViews() {
      View(this.query).then(res => {
        if (res.code == 200) {
          this.billList = res.data
        }
      })
    },
    onConfirm(date) {
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`

      // console.log(this.formatDate(start))
      // console.log(this.$store.getters.user.email)

      this.query.startTime = this.formatDate(start)
      this.query.endTime = this.formatDate(end)
      this.query.email = this.$store.getters.user.email

      this.loadViews()
    },
  },
}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 35px;
  left: 50%;
}
.view_list {
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  text-align: left;
}
.delete-button {
  height: 100%;
}
</style>
