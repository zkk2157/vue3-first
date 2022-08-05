<template>
  <div class="home">
    <div class="Register">
      <div class="zhuce">
        <div class="zhu">
          <div class="register">注册界面</div>
        </div>

        <div class="input">
          <el-input
            v-model="username"
            placeholder="请输入注册账号"
            style="width: 250px"
          />
        </div>
        <div class="password">
          <el-input
            v-model="password"
            placeholder="请输入密码"
            style="width: 250px"
          />
        </div>
        <div class="repassword">
          <el-input
            v-model="repassword"
            placeholder="请确认密码"
            style="width: 250px"
          />
        </div>
        <div class="button">
          <el-button
            type="success"
            size="default"
            style="width: 65px"
            @click="sendDate"
            >确认</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { sendUserName } from "../service/Register.js";
import {isExist} from '../service/isExist.js';
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const username = ref("");
const password = ref("");
const repassword = ref("");
export default {
  name: "regiSter",

  setup() {
    const router = new useRouter()
    async function sendDate() {
      if (password.value !== repassword.value) {
        ElMessage.error("两次密码不同！");
        return;
      }
      // const res = sendUserName('/send',username.value,password.value)
      const info =await isExist('/exist',username.value)   //判断用户名是否已经存在
      console.log(info.data.exist)
      if(info.data.success){
        ElMessage.error("用户名已经存在！");
        return;
      }

      const res = await sendUserName('/send',username.value,password.value)
      // console.log(username.value);
      // console.log(password.value)
      if(res.data.success){
         ElMessage({
          message: "注册成功",
          type: "success",
        });
        router.push('/')
      }
    }
    return {
      username,
      password,
      repassword,
      sendDate,
    };
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 609px;
  display: flex;
  justify-content: center;
}
.zhuce {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 230px;
  height: 100px;
  .zhu {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 186px;
  }
}
.register {
  margin-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 25px;
}
.Register {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  width: 275px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
}
.input {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.password {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.repassword {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.button {
  display: flex;
  justify-content: center;
}
</style>