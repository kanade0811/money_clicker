<script setup>
import { ref, onMounted } from "vue";
import { useMoney } from "@/composables/button/money";

console.log("field.vue is loaded");

const fieldRef = ref(null);
const { moneys, tapMoney, startSpawn } = useMoney();

onMounted(() => {
  startSpawn(fieldRef);
});
</script>

<template>
  <div class="field" ref="fieldRef">
    <div v-for="money in moneys" :key=" money.id " class="money"
      :style=" { left: money.x + 'px', top: money.y + 'px' } " @click="tapMoney(money.id)">
      💰
    </div>
  </div>
</template>

<style scoped>
.field {
  position: fixed;
  bottom: 0;
  height: 80vh;  
  width: calc(100vw - 14px);
  margin: 5px;
  border: 2px solid #333;
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
