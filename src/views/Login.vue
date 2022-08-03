<template>
  <div class="home">
    <!-- <img src="../../background.jpg" alt="无法显示" class="background"> -->
    <div class="INPUT">
      <div class="Input">
        <div class="sign">
          <div class="font">Sign in our website</div>
        </div>
        <div class="logo">
          <div class="person">
            <svg
              t="1659181480911"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1244"
              width="32"
              height="32"
            >
              <path
                d="M511.3 158.2c38.6 0 74.8 15 102.1 42.3s42.3 63.5 42.3 102.1-15 74.8-42.3 102.1C586.1 432 549.9 447 511.3 447s-74.8-15-102.1-42.3C382 377.3 367 341 367 302.5s15-74.8 42.3-102.1c27.2-27.2 63.5-42.2 102-42.2m0-60C398.5 98.2 307 189.6 307 302.5c0 112.8 91.5 204.3 204.3 204.3 112.8 0 204.3-91.5 204.3-204.3 0.1-112.9-91.4-204.3-204.3-204.3zM511.3 605.1c54.3 0 102.4 6.1 143.1 18.1 34.8 10.3 65.1 25.3 89.9 44.5 21.9 17 39.9 37.2 55.1 61.8 13.5 22 24.4 47 33.2 76.3 5.6 18.5-2.2 32.8-7.4 39.7-10.7 14.4-27.9 22.6-47.3 22.6H244.8c-19.3 0-36.6-8.2-47.3-22.6-5.1-6.9-12.9-21.2-7.4-39.7 8.8-29.3 19.6-54.3 33.2-76.3 15.1-24.6 33.1-44.9 55.1-61.8 24.8-19.2 55.1-34.2 89.9-44.5 40.6-12 88.8-18.1 143-18.1m0-60c-251.6 0-341.4 119.3-378.6 243.5-21 70 34.8 139.6 112.1 139.6h533.1c77.3 0 133.1-69.6 112.1-139.6-37.3-124.2-127.1-243.5-378.7-243.5z"
                fill="#595BB3"
                p-id="1245"
              ></path>
            </svg>
          </div>
          <div class="in">
            <el-input
              class="user"
              v-model="username"
              placeholder="请输入账号"
            />
          </div>
        </div>
        <div class="Lgo">
          <div class="Per">
            <svg
              t="1659183229129"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1503"
              width="32"
              height="32"
            >
              <path
                d="M799.3 433.7c10.6 0 20.7 4.2 28.3 11.9s11.9 17.7 11.9 28.3v354.2c0 10.6-4.2 20.7-11.9 28.3-7.6 7.6-17.7 11.9-28.3 11.9h-576c-10.6 0-20.7-4.2-28.3-11.9-7.6-7.6-11.9-17.7-11.9-28.3V473.9c0-10.6 4.2-20.7 11.9-28.3s17.7-11.9 28.3-11.9h576m0-60h-576c-55.1 0-100.2 45.1-100.2 100.2v354.2c0 55.1 45.1 100.2 100.2 100.2h576c55.1 0 100.2-45.1 100.2-100.2V473.9c0-55.1-45.1-100.2-100.2-100.2zM763.1 373.7h-60v-55.5c0-105.8-86-191.8-191.8-191.8-105.8 0-191.8 86-191.8 191.8v55.5h-60v-55.5c0-67 26.3-130.2 73.9-177.9 47.7-47.7 110.9-73.9 177.9-73.9s130.2 26.3 177.9 73.9 73.9 110.9 73.9 177.9v55.5z"
                fill="#595BB3"
                p-id="1504"
              ></path>
              <path
                d="M511.3 567.8m-83.2 0a83.2 83.2 0 1 0 166.4 0 83.2 83.2 0 1 0-166.4 0Z"
                fill="#595BB3"
                p-id="1505"
              ></path>
              <path
                d="M511.3 784c-18.3 0-33.3-15-33.3-33.3V551.1c0-18.3 15-33.3 33.3-33.3 18.3 0 33.3 15 33.3 33.3v199.6c0 18.4-15 33.3-33.3 33.3z"
                fill="#595BB3"
                p-id="1506"
              ></path>
            </svg>
          </div>

          <div class="on">
            <el-input
              class="pass"
              v-model="password"
              placeholder="请输入密码"
              show-password
            />
          </div>
        </div>
        <!-- <div>
          <el-input class="pass" v-model="password" placeholder="请输入密码" show-password />
        </div> -->
        <!-- <el-input class="pass" v-model="password" placeholder="请输入密码" show-password /> -->

        <div class="Sign">
          <div class="sign-in">
            <el-button
              @click="GoIntoMain"
              plain
              size="default "
              color="#97c4e7"
            >
              Sign in</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
const username = ref("");
const password = ref("");
import { useRouter } from "vue-router";
import { loginService } from "../service/login.js";

export default {
  name: "Login",

  setup() {
    const router = useRouter();

    async function GoIntoMain() {
      // const res = await axios.get(
      //   `http://127.0.0.1:4523/m1/1378008-0-default/pet/?username=${username.value}&password=${password.value}`
      // );
      //请求后端服务器的数据
      const res = await loginService('/login',username.value, password.value);
      // const res = await loginService(username.value, password.value);
      // const res = await axios.post(`http://10.3.22.74:8080/login?username=${username.value}&password=${password.value}`)

      if (!res.data.success) {
        ElMessage.error("登录失败");
        return;
      } else {
        router.push("/main");
        ElMessage({
          message: "登录成功",
          type: "success",
        });
      }
    }

    return {
      username,
      password,
      GoIntoMain,
    };
  },
};
</script>
<style lang="scss" scoped>
.Lgo {
  display: flex;
  justify-content: center;
}
.Per {
  width: 30px;
  height: 30px;
  margin-top: 29px;
  margin-right: 4px;
}
.logo {
  display: flex;
  justify-content: center;
}
.person {
  width: 30px;
  height: 30px;
  margin-top: 19px;
  margin-right: 4px;
}
.in {
  width: 325px;
  margin-right: 5px;
}
.on {
  width: 325px;
  margin-right: 6px;
}
.home {
  display: flex;
  flex-direction: column;

  background-image: url("../../background.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.font {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 28px;
}
.sign {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  color: #0e86d7;
  margin-top: 25px;
}
.Input {
  width: 300px;
  height: 300px;
  display: flex;

  flex-direction: column;
  border-radius: 13px;
  margin-top: 130px;
  border: 1px #8c8c9d solid;
  background-color: #99000110;
}
.user {
  margin-top: 20px;
}
.pass {
  margin-top: 30px;
  margin-bottom: 30px;
}
.INPUT {
  display: flex;
  justify-content: center;
}
.sign-in {
  width: 70px;
}
.Sign {
  display: flex;
  justify-content: center;
}
</style>