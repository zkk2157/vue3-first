<template>
  <div>
    <div class="layout">
      <div class="tuichu" @click="layout">
        <svg
          t="1658921842077"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="878"
          width="64"
          height="64"
        >
          <path
            d="M196.23936 769.8432a40.96 40.96 0 1 0 57.91744 57.91744L512 569.91744l257.8432 257.8432a40.96 40.96 0 0 0 57.91744-57.91744L569.91744 512l257.8432-257.8432a40.96 40.96 0 0 0-57.91744-57.91744L512 454.08256 254.1568 196.1984a40.96 40.96 0 0 0-57.91744 57.91744l257.8432 257.8432-257.8432 257.8432z"
            p-id="879"
          ></path>
        </svg>
      </div>
    </div>
    <div class="showtime">
      <div class="time">
        {{ time }}
      </div>
    </div>
  </div>
</template>
<script>
import { onBeforeUnmount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { getTime } from "../methods/gettime.js";

const time = ref("");
const state = reactive({
  timeInter: null,
});
export default {
  name: "HelloWorld",

  setup() {
    const router = useRouter();
    function layout() {
      router.push("/main");
    }

    onMounted(() => {
      state.timeInter = setInterval(() => {
        //一秒钟调用一次这个函数
        time.value = getTime();
      }, 1000);
    });
     onBeforeUnmount(() => {
      if (state.timeInter) {
        clearInterval(state.timeInter);
        state.timeInter = null;
      }
    });
    return {
      time,
      getTime,
      layout,
      state,
    };
  },
};
</script>


<style scoped>
.showtime {
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: greenyellow;
  margin-top: 60px;
}

.layout {
  display: flex;
  justify-content: center;
  margin-left: 1050px;
}
</style>
