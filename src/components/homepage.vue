<template>
    <div class="homepage_container">
        <div class="homepage_logo">
            <img src="../assets/logo.png">
        </div>
        <div class="homepage_item">
            <div class="homepage_item_record" @click="toRecord">
                <div class="img_record">
                    <img src="../assets/record.png">
                </div>
                <span>记账</span>
            </div>
            <div class="homepage_item_view">
                <div class="img_view">
                    <img src="../assets/view.png">
                </div>
                <span>查看流水</span>
            </div>
            <div class="homepage_item_statistic">
                <div class="img_statistic">
                    <img src="../assets/statistic.png">
                </div>
                <span>收支分析</span>
            </div>
        </div>
        <div class="homepage_back">
            <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" class="back">退出登录</van-button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    toRecord: function () {
      this.$router.push('/homepage/record')
    }
  }
}
</script>

<style scoped>
    .homepage_logo {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 130px;
    }
    .homepage_logo img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
    }
    .homepage_logo img:hover {
        transform: scale(1.1);
    }
    .homepage_item {
        position: absolute;
        top: 160px;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        height: 300px;
        /* background-color: pink; */
    }
    .homepage_item_record {
        position: absolute;
        top: 30px;
        left: 30px;
        width: 250px;
        height: 250px;
        /* background-color: purple; */
        border-radius: 30px;
        box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
        transition: all,0.2s;
    }
    .homepage_item_view {
        position: absolute;
        top: 30px;
        left: 320px;
        width: 250px;
        height: 250px;
        /* background-color: purple; */
        border-radius: 30px;
        box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
        transition: all,0.2s;
    }
    .homepage_item_statistic {
        position: absolute;
        top: 30px;
        left: 620px;
        width: 250px;
        height: 250px;
        /* background-color: purple; */
        border-radius: 30px;
        box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
        transition: all,0.3s;
    }
    .homepage_item_record:hover,
    .homepage_item_view:hover,
    .homepage_item_statistic:hover {
        transform: scale(1.1);
    }
    .homepage_item_record:active,
    .homepage_item_view:active,
    .homepage_item_statistic:active {
        background-color: royalblue;
    }
    .img_record,.img_view,.img_statistic {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 150px;
        /* background-color: royalblue; */
    }
    .img_record img,.img_view img,.img_statistic img {
        width: 100%;
        height: 100%;
    }
    .homepage_item span {
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: 20px;
    }
    .homepage_back {
        position: absolute;
        top: 500px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
