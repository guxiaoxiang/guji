<template>
    <div class="record_container">
        <div class="record_logo">
            <img src="../assets/logo.png">
        </div>
        <div class="record_input">
            <div class="record_input_title">
                <span>用户，您好</span>
            </div>
            <div class="record_input_tab">
                <van-tabs :active=active bind:change="onChange" :color= color :border=border :animated=animated>
                    <van-tab title="收入">
                        <div class="record_input_money">
                            <van-cell-group>
                                <van-field placeholder="   请输入消费金额" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                            </van-cell-group>
                        </div>
                        <div class="record_input_type">
                            <van-cell-group>
                                <van-field placeholder="   请选择消费类别" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                            </van-cell-group>
                        </div>
                        <div class="record_input_date">
                            <van-cell-group>
                                <van-field placeholder="   请输入消费时间" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                            </van-cell-group>
                        </div>
                        <div class="record_input_note">
                            <van-cell-group>
                                <van-field placeholder="   说明" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                            </van-cell-group>
                        </div>
                    </van-tab>
                    <van-tab title="支出">
                        <div class="record_input_money">
                             <van-cell-group>
                                 <van-field placeholder="   请输入消费金额" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                            </van-cell-group>
                        </div>
                        <div class="record_input_type">
                             <van-cell-group>
                                 <van-field placeholder="   请选择消费类别" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                             </van-cell-group>
                        </div>
                        <div class="record_input_date">
                            <van-cell-group>
                                 <van-field placeholder="   请输入消费时间" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                             </van-cell-group>
                        </div>
                        <div class="record_input_note">
                            <van-cell-group>
                                 <van-field placeholder="   说明" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                              </van-cell-group>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <div class="record_btn">
            <van-button type="info" round="true" class="record_btn_submit">提交</van-button>
            <van-button type="danger" round="true" class="record_btn_cancel" @click="back">取消</van-button>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: 0,
      color: 'blue',
      border: false,
      animated: true
    }
  },
  methods: {
    onChange (event) {
      this.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none'
      })
    },
    back: function () {
      this.$router.go(-1)
    }
  }
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
        width: 500px;
        height: 400px;
        border-radius: 30px;
        box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
    }
    .record_input_title {
        font-size: 30px
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
    .record_btn_cancel {
        padding: 10px;
    }
</style>
