<script setup>
import { ref, onMounted } from "vue";
import { useMoney } from "@/composables/button/money";

console.log("field.vue is loaded");

const fieldRef = ref(null);
const { moneys, tapMoney } = useMoney();

onMounted(() => {
  spawnMoney(fieldRef);
});
</script>

<template>
  <div class="field" ref="fieldRef">
    <div
      v-for="money in moneys"
      :key="money.id"
      class="money"
      :style="{ left: money.x + 'px', top: money.y + 'px' }"
    >
      💰
    </div>
  </div>
</template>

<style scoped>
.field {
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;
  background: #fff;
}

.money {
  position: absolute;
  width: 60px;
  height: 60px;
  background: gold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  box-shadow: 0 0 10px orange;
}



</style>
