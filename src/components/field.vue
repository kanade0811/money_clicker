<script setup>
import '@/assets/style/field.css'
import { ref, onMounted } from "vue";
import { useMoney } from "@/composables/button/money";

const fieldRef = ref(null);
const { moneys, tapMoney, startSpawn } = useMoney();

const dragging = ref(false);// ←追加

onMounted(() => {
  startSpawn(fieldRef);
});
</script>

<template>
  <div class="field" ref="fieldRef"
  @pointerdown="dragging = true" 
  @pointerup="dragging = false"
  @pointerleave="dragging = false">

    <div
      v-for="money in moneys"
      :key="money.id"
      class="money"
      draggable="false"
       :style="{ left: money.x + 'px', top: money.y + 'px' }"
      @click="tapMoney(money.id)"
      @pointerenter="dragging && tapMoney(money.id)" 
      >
      💰
    </div>
  </div>
</template>
