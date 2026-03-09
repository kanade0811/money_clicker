<script setup>
import '@/assets/style/field.css'
import { ref, onMounted } from "vue";
import { useMoney } from "@/composables/button/money";

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
