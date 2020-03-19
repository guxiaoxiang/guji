<template>
    <div class="register_container">
        <div class="register_logo">
            <img src="../assets/logo.png">
        </div>
        <div class="register_input">
            <div class="register_input_title">
                <span>用户注册</span>
            </div>
            <div class="register_input_name">
                <van-cell-group>
                    <van-field placeholder="   请输入用户名" left-icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
                </van-cell-group>
            </div>
            <div class="register_input_email">
                <van-cell-group>
                    <van-field placeholder="   请输入邮箱" left-icon="envelop-o" type="email"/>
                </van-cell-group>
            </div>
            <div class="register_input_pwd">
                <van-cell-group>
                    <van-field placeholder="   请输入密码" left-icon="bag-o" type="password"/>
                </van-cell-group>
            </div>
            <div class="register_btn">
                <van-button type="info" round="true" class="register_btn_submit">注册</van-button>
                <van-button type="danger" round="true" class="register_btn_cancel">取消</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .register_logo {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 130px;
    }
    .register_logo img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
    }
    .register_logo img:hover {
        transform: scale(1.1);
    }
    .register_input {
        position: absolute;
        top: 180px;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        height: 400px;
        box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
        border-radius: 30px;
    }
    .register_input_title span {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
        font-size: 25px;
        margin-bottom: 10px;
    }
    .register_input_name {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
    }
    .register_input_email {
        position: absolute;
        top: 140px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
    }
    .register_input_pwd {
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 10px;
    }
    .login_btn {
        position: absolute;
        top: 465px;
        left: 820px;
        width: 50px;
        font-size: 10px;
        color: royalblue;
        cursor: pointer;
    }
    .register_btn_submit {
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translateX(-120%);
    }
    .register_btn_cancel {
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translateX(20%);
    }
</style>
