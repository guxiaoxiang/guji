<template>
  <div class="login_container">
    <logo class="logo"></logo>
    <div class="login_input">
      <div class="login_input_title">
        <span id="test">用户登录</span>
      </div>
      <div class="login_input_info">
        <van-form
          :model="loginForm"
          ref="loginFormRef"
          validate-trigger="onBlur"
          @submit="loginHandler"
          id="loginForm"
        >
          <van-field
            v-model="loginForm.username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="ruleForm.username"
            class="uname"
          >
            <template #right-icon>
              <van-icon name="close" @click="resetUsername" size="20px" />
            </template>
          </van-field>
          <van-field
            v-model="loginForm.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="ruleForm.password"
            class="pwd"
          >
            <template #right-icon>
              <van-icon name="close" @click="resetPassword" size="20px" />
            </template>
          </van-field>
          <div class="login_btn">
            <van-button round type="info" native-type="submit" class="login_btn_submit">
              登录
            </van-button>
            <van-button
              type="warning"
              round
              class="register_btn"
              clearable="true"
              @click="toRegister"
              >注册</van-button
            >
            <van-button
              type="default"
              round
              class="cancel_btn"
              clearable="true"
              @click="back"
              >取消</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../components/logo'
import { Login } from '../api/user.js'
import { Toast } from 'vant'
import { Notify } from 'vant'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      ruleForm: {
        username: [{ validator: this.validator_uname, message: '用户名格式不合法' }],
        password: [{ validator: this.validator_pwd, message: '密码格式不合法' }],
      },
      username: '',
    }
  },
  components:{
    logo
  },
  methods: {
    back(){
      this.$router.push('/bar/my')
    },
    resetUsername() {
      this.loginForm.username = ''
    },
    resetPassword() {
      this.loginForm.password = ''
    },
    validator_uname: function(val) {
      //字母开头，允许3-16字节，允许字母数字下划线
      return /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(val)
    },
    validator_pwd: function(val) {
      //以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z0-9]\w{5,17}$/.test(val)
    },
    toRegister: function() {
      this.$router.push('/register')
    },
    login: function() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) {
          return valid
        } else {
          this.loginHandler()
        }
      })
    },
    loginHandler() {
      var obj = {}
      obj.username = this.loginForm.username
      obj.password = this.loginForm.password

      Login(obj).then(res => {
        if (res.code == 200) {
          // console.log(res.data)
          Toast.success(res.message)
          this.$store.commit('setUser', res.data)
          this.$router.push('/bar/my')
        } else if (res.code == 400) {
          Notify({ type: 'warning', message: res.message })
        } else {
          Notify({ type: 'warning', message: res.message })
        }
      })
    },
  },
}
</script>

<style scoped>
.login_container {
  position: relative;
  top: 100px;
  height: 100%;
}
.logo {
  position: absolute;
  top: 20px;
  left: 50%;
}
.login_input {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
}
.login_input_title span {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
  font-size: 25px;
  margin-bottom: 10px;
}
.uname {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
  font-size: 16px;
}
.pwd {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 10px;
  font-size: 16px;
}
.login_btn_submit {
  margin: 0 20px;
}
.register_btn {
  margin: 0 20px;
}
.cancel_btn {
  margin: 0 20px;
}
.login_btn {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 50px;
}
</style>
