<template>
    <div class="login_container">
        <div class="login_logo">
            <img src="../assets/logo.png">
        </div>
        <div class="login_input">
            <div class="login_input_title">
                <span>用户登录</span>
            </div>
            <div class="login_input_name">
                <van-cell-group>
                    <van-field placeholder="   请输入用户名" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                </van-cell-group>
            </div>
            <div class="login_input_pwd">
                <van-cell-group>
                    <van-field placeholder="   请输入密码" left-icon="bag-o" type="password"/>
                </van-cell-group>
            </div>
        </div>
        <div class="login_btn">
            <van-button type="info" round="true" class="login_btn_submit">登录</van-button>
            <van-button type="danger" round="true" class="login_btn_cancel">取消</van-button>
            <span class="login_register">立即注册</span>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .login_container {
        position: relative;
        height: 100%;
    }
    .login_logo {
        position: absolute;
        top: 20px;
        left: 50%;
        width: 387px;
        height: 180px;
        transform: translateX(-50%);
    }
    .login_input {
        position: absolute;
        top: 260px;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        height: 250px;
        /* background-color: pink; */
        box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
        border-radius: 30px;
    }
    .login_input_title span {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
        font-size: 25px;
        margin-bottom: 10px;
    }
    .login_input_name {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
    }
    .login_input_pwd {
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
    }
    .login_btn_submit {
        position: absolute;
        top: 450px;
        left: 50%;
        transform: translateX(-120%);
    }
    .login_btn_cancel {
        position: absolute;
        top: 450px;
        left: 50%;
        transform: translateX(20%);
    }
    .login_btn .login_register {
        position: absolute;
        top: 465px;
        left: 820px;
        width: 50px;
        font-size: 10px;
        color: royalblue;
    }
</style>
