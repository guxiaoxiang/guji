<template>
  <div class="register_container">
    <div class="register_logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="register_input">
      <div class="register_input_title">
        <span>用户注册</span>
      </div>
      <div class="register_input_name">
        <van-cell-group :model="registerForm">
          <van-field
            required
            placeholder="   请输入用户名"
            name="username"
            v-model="registerForm.username"
          >
            <template #left-icon>
              <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="20px"/>
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div class="register_input_phone">
        <van-cell-group :model="registerForm">
          <van-field
            required
            placeholder="   请输入有效电话号码"
            name="phone"
            v-model="registerForm.phone"
          >
            <template #left-icon>
              <van-icon name="phone-o" size="20px"/>
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div class="register_input_email">
        <van-cell-group>
          <van-field
            required
            placeholder="   请输入邮箱"
            type="email"
            name="email"
            v-model="registerForm.email"
          >
            <template #left-icon>
              <van-icon name="envelop-o" size="20px"/>
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div class="register_input_pwd">
        <van-cell-group>
          <van-field
            required
            placeholder="   请输入密码"
            type="password"
            name="password"
            v-model="registerForm.password"
          >
            <template #left-icon>
              <van-icon name="bag-o" size="20px"/>
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div class="register_btn">
        <van-button type="warning" round class="register_btn_submit" @click="register"
          >注册</van-button
        >
        <van-button type="danger" round class="register_btn_cancel" @click="back">取消</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Register } from '../api/user.js'
import { Toast } from 'vant'
import { Notify } from 'vant'
export default {
  data() {
    return {
      registerForm: {
        username: '',
        phone:'',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    },
    register() {
      var obj = {}
      obj.username = this.registerForm.username
      obj.phone = this.registerForm.phone
      obj.email = this.registerForm.email
      obj.password = this.registerForm.password
      console.log(obj)

      Register(obj)
        .then(res => {
          if (res.code == 200) {
            Toast.success(res.message)
            var that = this
            setTimeout(function() {
              that.$router.go(-1)
            }, 2000)
          } else {
            Notify({ type: 'warning', message: res.message })
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
  },
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
  width: 100%;
  height: 100%;
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
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
}
.register_input_phone {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
}
.register_input_email {
  position: absolute;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
}
.register_input_pwd {
  position: absolute;
  top: 280px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
}
.register_btn_submit {
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translateX(-120%);
}
.register_btn_cancel {
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translateX(20%);
}
</style>
