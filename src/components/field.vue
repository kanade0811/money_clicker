<script setup>
import { ref } from "vue";
import { useClick } from "@/composables/click";

const moneys = ref([
  { id: 1, worth: 10 },
  { id: 2, worth: 20 }
]);

const { collect } = useClick();

function onClick(money) {
  collect(money); 
  moneys.value = moneys.value.filter(m => m.id !== money.id);
}
</script>

<template>
  <div class="field">
    <div
      v-for="money in moneys"
      :key="money.id"
      @click="onClick(money)"
      class="money"
    >
      💰 {{ money.worth }}
    </div>
  </div>
</template>
