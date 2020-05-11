<template>
  <div class="deletePage">
    <!-- 吸顶返回按钮 -->
    <div class="stickyNavbar">
      <van-sticky>
        <van-nav-bar
          title="回收站"
          left-text="返回"
          right-text="清空"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </van-sticky>
    </div>
    <div class="view_list">
      <!-- 账单展示区域 -->
      <div v-if="this.billList.length != 0">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-swipe-cell v-for="(item, index) in billList" :key="index">
            <template #left>
              <van-button
                square
                type="primary"
                text="恢复"
                class="restore_button"
                @click="restoreBill(item.recordId)"
              />
            </template>
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
        <van-empty image="search" description="回收站很干净哦。。。" />
      </div>
    </div>
  </div>
</template>

<script>
import { ClearBill } from '../api/user'
import { RestoreBill } from '../api/user'
import { DeleteBill } from '../api/user'
import { ViewDelete } from '../api/user'
import { Notify } from 'vant'
import { Dialog } from 'vant'

export default {
  mounted: function() {
    this.loadViews()
  },
  data() {
    return {
      list: [],
      billList: [],
      finished: false,
      loading: false,
    }
  },
  methods: {
    restoreBill(id) {
      Dialog.confirm({
        message: '确定恢复这张账单吗？',
      })
        .then(() => {
          // on confirm
          RestoreBill({ id }).then(res => {
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
    loadViews() {
      ViewDelete().then(res => {
        if (res.code == 200) {
          this.billList = res.data
        }
      })
    },
    deleteBill(id) {
      // console.log(id)
      Dialog.confirm({
        message: '确定删除这张订单吗？',
      })
        .then(() => {
          // on confirm
          DeleteBill({ id }).then(res => {
            if (res.code == 200) {
              Notify({ type: 'warning', message: res.message, duration: 1000 })
              this.loadViews()
            }
          })
        })
        .catch(() => {
          // on cancel
        })
    },
    onClickLeft() {
      this.$router.push('/homepage/view')
    },
    onClickRight() {
      Dialog.confirm({
        message: '确定清空回收站吗？',
      })
        .then(() => {
          // on confirm
          ClearBill().then(res => {
            if (res.code == 200) {
              console.log('删除成功')
              this.loadViews()
            }
          })
        })
        .catch(() => {
          // on cancel
        })
    },
  },
}
</script>

<style scoped>
.view_list {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  text-align: left;
}
.delete-button {
  height: 100%;
}
.restore_button {
  height: 100%;
}
</style>
